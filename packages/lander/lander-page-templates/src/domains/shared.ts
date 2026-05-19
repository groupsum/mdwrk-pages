import type { PageKind, PageSpec, SchemaSpec } from "@mdwrk/lander-content-contract";
import { definePageTemplate } from "../define.js";
import { schemaIntentsFromKinds } from "../page-spec/schema-intents.js";
import type { DomainTemplateData, LinkSlotDefinition, PageTemplate, TemplateDomain, TemplateRenderContext, TemplateTopology } from "../types.js";

export interface DomainPageTemplateOptions {
  id: string;
  domain: TemplateDomain;
  kind: PageKind;
  title: string;
  description: string;
  fallbackSchemaKinds?: SchemaSpec["kind"][];
  linkSlots?: LinkSlotDefinition[];
  topology?: TemplateTopology;
}

function bodyFor(data: DomainTemplateData, fallbackBody: string): string {
  return data.body ?? data.summary ?? fallbackBody;
}

function sectionsForTemplate(context: TemplateRenderContext<DomainTemplateData>, options: DomainPageTemplateOptions): PageSpec["sections"] {
  const { instance } = context;
  const { data } = instance;
  const body = bodyFor(data, instance.description);
  if (data.sections?.length) return data.sections;

  const hero = {
    id: "hero",
    kind: "hero" as const,
    eyebrow: data.eyebrow,
    title: instance.title,
    subtitle: data.summary ?? instance.description,
  };

  switch (options.kind) {
    case "home":
      return [
        hero,
        {
          id: "linked-pages",
          kind: "feature_grid",
          title: "Linked pages",
          items: (context.links.children ?? []).map((link) => ({
            title: link.label,
            description: `${link.targetTemplateId} page template`,
            href: link.href,
          })),
        },
        {
          id: "overview",
          kind: "markdown",
          title: "Overview",
          body,
        },
      ];
    case "feature":
      return [
        hero,
        {
          id: "feature-detail",
          kind: "feature_detail",
          title: instance.title,
          body,
        },
      ];
    case "pricing":
      return [
        hero,
        {
          id: "pricing",
          kind: "pricing",
          title: instance.title,
          body,
        },
      ];
    case "compare":
      return [
        hero,
        {
          id: "comparison",
          kind: "comparison",
          title: instance.title,
          columns: [
            { id: "current", label: "Current" },
            { id: "target", label: "Target" },
          ],
          rows: [
            {
              id: "summary",
              label: "Summary",
              cells: {
                current: data.summary ?? instance.description,
                target: body,
              },
            },
          ],
        },
      ];
    case "package":
      return [
        hero,
        {
          id: "packages",
          kind: "package_grid",
          title: instance.title,
          packages: [
            {
              name: instance.title,
              description: data.summary ?? instance.description,
              href: instance.href ?? instance.slug,
            },
          ],
        },
      ];
    case "proof":
      return [
        hero,
        {
          id: "proof",
          kind: "proof_matrix",
          title: instance.title,
          items: [
            {
              claim: data.summary ?? instance.description,
              status: "supported",
              evidence: body,
            },
          ],
        },
      ];
    case "answer":
      return [
        hero,
        {
          id: "answer",
          kind: "markdown",
          title: instance.title,
          body,
        },
        ...(data.faq?.length ? [{ id: "faq", kind: "faq" as const, title: "Questions", items: data.faq }] : []),
      ];
    case "trust":
    case "docs_bridge":
    case "use_case":
    default:
      return [
        hero,
        {
          id: "overview",
          kind: "markdown",
          title: instance.title,
          body,
        },
      ];
  }
}

export function createDomainPageTemplate(options: DomainPageTemplateOptions): PageTemplate<DomainTemplateData> {
  return definePageTemplate<DomainTemplateData>({
    id: options.id,
    domain: options.domain,
    kind: options.kind,
    title: options.title,
    description: options.description,
    linkSlots: options.linkSlots,
    topology: options.topology,
    buildPage: (context): PageSpec => ({
      kind: options.kind,
      slug: context.instance.slug,
      title: context.instance.title,
      description: context.instance.description,
      h1: context.instance.title,
      intro: context.instance.data.intro ?? context.instance.data.summary ?? context.instance.description,
      sections: sectionsForTemplate(context, options),
      faq: context.instance.data.faq,
    }),
    schema: (context) => schemaIntentsFromKinds(context, options.fallbackSchemaKinds ?? ["WebPage"]),
  });
}
