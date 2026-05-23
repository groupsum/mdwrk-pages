import type { SchemaSpec } from "@mdwrk/lander-content-contract";
import type { DomainTemplateData, ResolvedTemplateLink, SchemaTemplateLinkDefinition, TemplateRenderContext } from "../types.js";

function matchesSchemaLink(link: ResolvedTemplateLink, definition: SchemaTemplateLinkDefinition): boolean {
  if (definition.slotId && link.slotId !== definition.slotId) return false;
  if (definition.relationship && link.relationship !== definition.relationship) return false;
  return definition.targetTemplateIds.includes(link.targetTemplateId);
}

function resolveSchemaLinkedPages(
  context: TemplateRenderContext<DomainTemplateData>,
  kind: SchemaSpec["kind"],
): Record<string, Array<{ href: string; label: string; targetTemplateId: string; pageId: string }>> | undefined {
  const definitions = context.template.schemaLinks?.filter((definition) => definition.kind === kind) ?? [];
  if (!definitions.length) return undefined;

  const linkedPages = Object.fromEntries(
    definitions.map((definition) => [
      definition.property,
      Object.values(context.links)
        .flat()
        .filter((link) => matchesSchemaLink(link, definition))
        .map((link) => ({
          href: link.href,
          label: link.label,
          targetTemplateId: link.targetTemplateId,
          pageId: link.targetId,
        })),
    ]),
  );

  return Object.values(linkedPages).some((items) => items.length > 0) ? linkedPages : undefined;
}

export function schemaIntentsFromKinds(context: TemplateRenderContext<DomainTemplateData>, fallbackKinds: SchemaSpec["kind"][] = ["WebPage"]): SchemaSpec[] {
  const kinds = context.instance.data.schemaKinds ?? fallbackKinds;
  return kinds.map((kind) => {
    const linkedPages = resolveSchemaLinkedPages(context, kind);
    return {
      id: `${context.instance.id}:${String(kind).toLowerCase()}`,
      kind,
      data: {
        name: context.instance.title,
        description: context.instance.description,
        url: context.instance.slug,
        ...(linkedPages ? { linkedPages } : {}),
      },
    };
  });
}
