import type {
  DomainTemplateData,
  RelationshipRole,
  TemplateGraph,
  TemplateBundle,
  PageInstance,
  TemplateEdge,
  TemplateRelationshipKind,
  TemplateDomain,
} from "@mdwrk/lander-page-templates";

export interface PresetNamedPages {
  entryPageKey?: string;
  pageIdsByKey: Record<string, string>;
  pageKeysById: Record<string, string>;
}

export interface PageTemplatePreset {
  id: string;
  title: string;
  description: string;
  domain: TemplateDomain;
  graph: TemplateGraph;
  bundles: TemplateBundle[];
  namedPages: PresetNamedPages;
}

export interface PresetOptions {
  baseSlug?: string;
  title?: string;
  description?: string;
  pages?: PresetPageMap;
  links?: PresetLinkMap;
}

export interface PresetPageSeed {
  id: string;
  templateId: string;
  slug: string;
  title: string;
  description: string;
  summary?: string;
  data?: DomainTemplateData;
  order?: number;
}

export type PresetPageContent = Partial<Omit<PresetPageSeed, "id" | "templateId">> & {
  id?: string;
  templateId?: string;
  data?: DomainTemplateData;
};

export type PresetPageMap = Record<string, PresetPageContent>;

export interface PresetLinkTarget {
  page: string;
  relationship?: TemplateRelationshipKind;
  role?: RelationshipRole;
  label?: string;
  order?: number;
}

export type PresetLinkValue = string | PresetLinkTarget;
export type PresetSlotLinkMap = Record<string, PresetLinkValue[]>;
export type PresetLinkMap = Record<string, PresetSlotLinkMap>;

export interface BuildPresetGraphInput {
  bundles: TemplateBundle[];
  pages: Record<string, PresetPageSeed>;
  links?: PresetLinkMap;
  entryPageKey?: string;
}

export function normalizePresetBaseSlug(value = "/"): string {
  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "";
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}`;
}

export function presetSlug(baseSlug: string | undefined, suffix = ""): string {
  const base = normalizePresetBaseSlug(baseSlug);
  const cleanSuffix = suffix.replace(/^\/+|\/+$/g, "");
  if (!base && !cleanSuffix) return "/";
  if (!cleanSuffix) return `${base}/`;
  return `${base}/${cleanSuffix}/`.replace(/\/+/g, "/");
}

export function seedInstance(seed: PresetPageSeed): PageInstance {
  return {
    id: seed.id,
    templateId: seed.templateId,
    slug: seed.slug,
    title: seed.title,
    description: seed.description,
    order: seed.order,
    data: {
      summary: seed.summary,
      ...(seed.data ?? {}),
    },
  };
}

export function edge(sourceId: string, targetId: string, relationship: TemplateRelationshipKind, slotId: string, order?: number, role?: RelationshipRole, label?: string): TemplateEdge {
  return { sourceId, targetId, relationship, slotId, order, role, label };
}
