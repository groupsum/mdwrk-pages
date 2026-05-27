import { validateTemplateDataBySchemaId } from "@mdwrk/lander-content-contract";
import { errorDiagnostic, warningDiagnostic } from "../diagnostics.js";
import type { ChildSlotDefinition, PageInstance, PageTemplate, RelationshipRole, RelationshipRule, SchemaTemplateLinkDefinition, TemplateDiagnostic, TemplateEdge, TemplateGraph } from "../types.js";
import { defaultRoleForRelationship } from "./resolve.js";

function edgeId(edge: TemplateEdge): string {
  return edge.id ?? `${edge.sourceId}:${edge.relationship}:${edge.targetId}`;
}

function ruleApplies(rule: RelationshipRule, source: PageInstance, target: PageInstance): boolean {
  return (
    (!rule.sourceTemplateIds || rule.sourceTemplateIds.includes(source.templateId)) &&
    (!rule.targetTemplateIds || rule.targetTemplateIds.includes(target.templateId))
  );
}

function roleFor(edge: TemplateEdge, sourceTemplate?: PageTemplate): RelationshipRole {
  const slot = sourceTemplate?.linkSlots?.find((item) => item.id === edge.slotId || item.relationship === edge.relationship);
  return edge.role ?? slot?.role ?? defaultRoleForRelationship(edge.relationship);
}

function topologySlotMatches(slot: ChildSlotDefinition, edge: TemplateEdge): boolean {
  return edge.slotId === slot.id || edge.relationship === slot.relationship;
}

function edgeMatchesSchemaLink(edge: TemplateEdge, target: PageInstance, definition: SchemaTemplateLinkDefinition): boolean {
  if (definition.slotId && edge.slotId !== definition.slotId) return false;
  if (definition.relationship && edge.relationship !== definition.relationship) return false;
  return definition.targetTemplateIds.includes(target.templateId);
}

export function validateTemplateGraph(graph: TemplateGraph): TemplateDiagnostic[] {
  const diagnostics: TemplateDiagnostic[] = [];
  const templates = new Map<string, PageTemplate>(graph.templates.map((template) => [template.id, template]));
  const instances = new Map<string, PageInstance>(graph.instances.map((instance) => [instance.id, instance]));
  const rules = [...(graph.rules ?? []), ...graph.templates.flatMap((template) => template.rules ?? [])];

  for (const template of graph.templates) {
    const slotIds = new Set<string>();
    for (const slot of template.linkSlots ?? []) {
      if (slotIds.has(slot.id)) {
        diagnostics.push(errorDiagnostic({
          code: "template.linkSlot.duplicate",
          message: `Template ${template.id} declares duplicate link slot ${slot.id}.`,
          templateId: template.id,
        }));
      }
      slotIds.add(slot.id);
    }
    if (template.topology?.childPolicy !== "terminal") {
      const topologySlotIds = new Set<string>();
      for (const slot of template.topology?.childSlots ?? []) {
        if (topologySlotIds.has(slot.id)) {
          diagnostics.push(errorDiagnostic({
            code: "template.topology.childSlot.duplicate",
            message: `Template ${template.id} declares duplicate topology child slot ${slot.id}.`,
            templateId: template.id,
          }));
        }
        topologySlotIds.add(slot.id);
      }
    }
    const schemaLinkKeys = new Set<string>();
    for (const definition of template.schemaLinks ?? []) {
      const key = `${definition.kind}:${definition.property}`;
      if (schemaLinkKeys.has(key)) {
        diagnostics.push(errorDiagnostic({
          code: "template.schemaLink.duplicate",
          message: `Template ${template.id} declares duplicate schema link ${key}.`,
          templateId: template.id,
        }));
      }
      schemaLinkKeys.add(key);
      if (definition.slotId) {
        const slot = template.linkSlots?.find((item) => item.id === definition.slotId);
        if (!slot) {
          diagnostics.push(errorDiagnostic({
            code: "template.schemaLink.slot.missing",
            message: `Template ${template.id} declares schema link ${key} for missing slot ${definition.slotId}.`,
            templateId: template.id,
          }));
        } else if (definition.relationship && slot.relationship !== definition.relationship) {
          diagnostics.push(errorDiagnostic({
            code: "template.schemaLink.relationship.invalid",
            message: `Template ${template.id} declares schema link ${key} with relationship ${definition.relationship} but slot ${definition.slotId} uses ${slot.relationship}.`,
            templateId: template.id,
          }));
        }
      }
      const slot = definition.slotId ? template.linkSlots?.find((item) => item.id === definition.slotId) : undefined;
      for (const targetTemplateId of definition.targetTemplateIds) {
        if (slot?.targetTemplateIds?.length && !slot.targetTemplateIds.includes(targetTemplateId)) {
          diagnostics.push(errorDiagnostic({
            code: "template.schemaLink.target.invalid",
            message: `Template ${template.id} declares schema link ${key} for target template ${targetTemplateId} not allowed by slot ${slot.id}.`,
            templateId: template.id,
          }));
        }
      }
    }
  }

  for (const instance of graph.instances) {
    if (!templates.has(instance.templateId)) {
      diagnostics.push(errorDiagnostic({
        code: "instance.template.missing",
        message: `Instance ${instance.id} references missing template ${instance.templateId}.`,
        instanceId: instance.id,
        templateId: instance.templateId,
      }));
    }
  }

  for (const instance of graph.instances) {
    const template = templates.get(instance.templateId);
    if (!template?.dataSchemaId) continue;
    const issues = validateTemplateDataBySchemaId(template.dataSchemaId, instance.data);
    for (const detail of issues) {
      diagnostics.push(errorDiagnostic({
        code: `instance.data.${detail.keyword}`,
        message: `Instance ${instance.id} failed data validation at ${detail.path}: ${detail.message}`,
        instanceId: instance.id,
        templateId: template.id,
      }));
    }
  }

  for (const edge of graph.edges) {
    const source = instances.get(edge.sourceId);
    const target = instances.get(edge.targetId);
    if (!source) {
      diagnostics.push(errorDiagnostic({ code: "edge.source.missing", message: `Edge ${edgeId(edge)} references missing source.`, edgeId: edge.id }));
      continue;
    }
    if (!target) {
      diagnostics.push(errorDiagnostic({ code: "edge.target.missing", message: `Edge ${edgeId(edge)} references missing target.`, edgeId: edge.id }));
      continue;
    }

    const sourceTemplate = templates.get(source.templateId);
    const edgeRole = roleFor(edge, sourceTemplate);
    const slot = sourceTemplate?.linkSlots?.find((item) => item.id === edge.slotId || item.relationship === edge.relationship);
    if (edge.slotId && !slot) {
      diagnostics.push(errorDiagnostic({
        code: "edge.slot.missing",
        message: `Edge ${edgeId(edge)} targets missing slot ${edge.slotId}.`,
        edgeId: edge.id,
        instanceId: source.id,
        templateId: source.templateId,
      }));
    }
    if (slot?.targetTemplateIds && !slot.targetTemplateIds.includes(target.templateId)) {
      diagnostics.push(errorDiagnostic({
        code: "edge.slot.target.invalid",
        message: `Edge ${edgeId(edge)} links slot ${slot.id} to incompatible template ${target.templateId}.`,
        edgeId: edge.id,
        instanceId: source.id,
        templateId: source.templateId,
      }));
    }
    if (slot?.role && edge.role && slot.role !== edge.role) {
      diagnostics.push(errorDiagnostic({
        code: "edge.role.invalid",
        message: `Edge ${edgeId(edge)} declares role ${edge.role} but slot ${slot.id} expects ${slot.role}.`,
        edgeId: edge.id,
        instanceId: source.id,
        templateId: source.templateId,
      }));
    }

    if (sourceTemplate?.topology?.childPolicy === "terminal" && edgeRole === "tree_child") {
      diagnostics.push(errorDiagnostic({
        code: "template.terminal.child.invalid",
        message: `Terminal template ${sourceTemplate.id} cannot emit tree-child edge ${edgeId(edge)}.`,
        edgeId: edge.id,
        instanceId: source.id,
        templateId: sourceTemplate.id,
      }));
    }

    const topologySlot = sourceTemplate?.topology?.childSlots?.find((item) => topologySlotMatches(item, edge));
    if (edgeRole === "tree_child" && sourceTemplate?.topology?.childPolicy !== "terminal") {
      if (sourceTemplate?.topology?.childSlots?.length && !topologySlot) {
        diagnostics.push(errorDiagnostic({
          code: "edge.topology.childSlot.missing",
          message: `Edge ${edgeId(edge)} is a tree-child edge but does not match an allowed topology child slot.`,
          edgeId: edge.id,
          instanceId: source.id,
          templateId: source.templateId,
        }));
      }
      if (topologySlot?.targetTemplateIds && !topologySlot.targetTemplateIds.includes(target.templateId)) {
        diagnostics.push(errorDiagnostic({
          code: "edge.topology.target.invalid",
          message: `Edge ${edgeId(edge)} links child slot ${topologySlot.id} to incompatible template ${target.templateId}.`,
          edgeId: edge.id,
          instanceId: source.id,
          templateId: source.templateId,
        }));
      }
    }

    const matchingRule = rules.find((rule) => rule.relationship === edge.relationship && ruleApplies(rule, source, target));
    if (rules.some((rule) => rule.relationship === edge.relationship) && !matchingRule) {
      diagnostics.push(warningDiagnostic({
        code: "edge.rule.unmatched",
        message: `Edge ${edgeId(edge)} has no matching relationship rule.`,
        edgeId: edge.id,
        instanceId: source.id,
      }));
    }
  }

  for (const instance of graph.instances) {
    const template = templates.get(instance.templateId);
    if (!template) continue;
    for (const slot of template.linkSlots ?? []) {
      const count = graph.edges.filter((edge) => edge.sourceId === instance.id && (edge.slotId === slot.id || edge.relationship === slot.relationship)).length;
      if ((slot.cardinality === "one" || slot.cardinality === "many") && count === 0) {
        diagnostics.push(errorDiagnostic({
          code: "slot.required.missing",
          message: `Instance ${instance.id} is missing required link slot ${slot.id}.`,
          instanceId: instance.id,
          templateId: template.id,
        }));
      }
      if ((slot.cardinality === "one" || slot.cardinality === "optional_one") && count > 1) {
        diagnostics.push(errorDiagnostic({
          code: "slot.cardinality.exceeded",
          message: `Instance ${instance.id} has too many links for slot ${slot.id}.`,
          instanceId: instance.id,
          templateId: template.id,
        }));
      }
      if (slot.min !== undefined && count < slot.min) {
        diagnostics.push(errorDiagnostic({
          code: "slot.min.unsatisfied",
          message: `Instance ${instance.id} has ${count} links for slot ${slot.id}; expected at least ${slot.min}.`,
          instanceId: instance.id,
          templateId: template.id,
        }));
      }
      if (slot.max !== undefined && count > slot.max) {
        diagnostics.push(errorDiagnostic({
          code: "slot.max.exceeded",
          message: `Instance ${instance.id} has ${count} links for slot ${slot.id}; expected at most ${slot.max}.`,
          instanceId: instance.id,
          templateId: template.id,
        }));
      }
    }

    const topology = template.topology;
    for (const definition of template.schemaLinks ?? []) {
      const count = graph.edges.filter((edge) => {
        if (edge.sourceId !== instance.id) return false;
        const target = instances.get(edge.targetId);
        if (!target) return false;
        return edgeMatchesSchemaLink(edge, target, definition);
      }).length;
      const schemaLinkKey = `${definition.kind}:${definition.property}`;
      if ((definition.cardinality === "one" || definition.cardinality === "many") && count === 0) {
        diagnostics.push(errorDiagnostic({
          code: "schemaLink.required.missing",
          message: `Instance ${instance.id} is missing required schema link ${schemaLinkKey}.`,
          instanceId: instance.id,
          templateId: template.id,
        }));
      }
      if ((definition.cardinality === "one" || definition.cardinality === "optional_one") && count > 1) {
        diagnostics.push(errorDiagnostic({
          code: "schemaLink.cardinality.exceeded",
          message: `Instance ${instance.id} has too many linked pages for schema link ${schemaLinkKey}.`,
          instanceId: instance.id,
          templateId: template.id,
        }));
      }
      if (definition.min !== undefined && count < definition.min) {
        diagnostics.push(errorDiagnostic({
          code: "schemaLink.min.unsatisfied",
          message: `Instance ${instance.id} has ${count} linked pages for schema link ${schemaLinkKey}; expected at least ${definition.min}.`,
          instanceId: instance.id,
          templateId: template.id,
        }));
      }
      if (definition.max !== undefined && count > definition.max) {
        diagnostics.push(errorDiagnostic({
          code: "schemaLink.max.exceeded",
          message: `Instance ${instance.id} has ${count} linked pages for schema link ${schemaLinkKey}; expected at most ${definition.max}.`,
          instanceId: instance.id,
          templateId: template.id,
        }));
      }
    }
    if (topology?.childPolicy === "required") {
      for (const childSlot of topology.childSlots ?? []) {
        const count = graph.edges.filter((edge) => edge.sourceId === instance.id && topologySlotMatches(childSlot, edge) && roleFor(edge, template) === "tree_child").length;
        const min = childSlot.min ?? 1;
        if (count < min) {
          diagnostics.push(errorDiagnostic({
            code: "topology.child.required.missing",
            message: `Instance ${instance.id} has ${count} children for topology slot ${childSlot.id}; expected at least ${min}.`,
            instanceId: instance.id,
            templateId: template.id,
          }));
        }
      }
    }
    if (topology?.childPolicy === "optional" || topology?.childPolicy === "required") {
      for (const childSlot of topology.childSlots ?? []) {
        const count = graph.edges.filter((edge) => edge.sourceId === instance.id && topologySlotMatches(childSlot, edge) && roleFor(edge, template) === "tree_child").length;
        if (childSlot.max !== undefined && count > childSlot.max) {
          diagnostics.push(errorDiagnostic({
            code: "topology.child.max.exceeded",
            message: `Instance ${instance.id} has ${count} children for topology slot ${childSlot.id}; expected at most ${childSlot.max}.`,
            instanceId: instance.id,
            templateId: template.id,
          }));
        }
      }
    }
  }

  return diagnostics;
}
