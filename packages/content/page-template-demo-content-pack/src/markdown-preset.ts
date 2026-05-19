import {
  markdownFileToSourcePage,
  productDomainBundle,
  trustDomainBundle,
  type MarkdownPageTemplateSourceFile,
} from "@mdwrk/lander-page-templates";
import {
  buildPresetFromMaps,
  type PageTemplatePreset,
  type PresetLinkMap,
  type PresetPageSeed,
} from "@mdwrk/lander-page-template-presets";

const PRESET_PAGE_BY_TEMPLATE_ID = new Map([
  ["product.home", "home"],
  ["product.product", "product"],
  ["product.feature", "feature"],
  ["product.compare", "compare"],
  ["product.pricing", "pricing"],
  ["product.case-study", "caseStudy"],
  ["product.changelog", "changelog"],
  ["trust.privacy", "privacy"],
  ["trust.terms", "terms"],
]);

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function pageKeyFor(frontmatter: Record<string, unknown>, templateId: string, id: string): string {
  return asString(frontmatter.presetPage, PRESET_PAGE_BY_TEMPLATE_ID.get(templateId) ?? id);
}

export function createPageTemplateDemoMarkdownPreset(files: readonly MarkdownPageTemplateSourceFile[]): PageTemplatePreset {
  const pages: Record<string, PresetPageSeed> = {};
  const pageKeyById = new Map<string, string>();
  const parsedFiles = files.map((file) => markdownFileToSourcePage(file.raw, file.path));

  for (const parsed of parsedFiles) {
    const page = parsed.page;
    const pageKey = pageKeyFor(parsed.frontmatter, page.templateId, page.id);
    pageKeyById.set(page.id, pageKey);
    pages[pageKey] = {
      id: page.id,
      templateId: page.templateId,
      slug: page.slug,
      title: page.title,
      description: page.description,
      summary: asString(page.data.summary),
      data: page.data,
      order: page.order,
    };
  }

  const links: PresetLinkMap = {};
  for (const parsed of parsedFiles) {
    const sourceKey = pageKeyById.get(parsed.page.id);
    if (!sourceKey) continue;
    for (const link of parsed.links) {
      const targetKey = pageKeyById.get(link.targetId);
      if (!targetKey) continue;
      const slots = links[sourceKey] ?? {};
      const values = slots[link.slotId ?? "related"] ?? [];
      values.push({
        page: targetKey,
        relationship: link.relationship,
        role: link.role,
        label: link.label,
        order: link.order,
      });
      slots[link.slotId ?? "related"] = values;
      links[sourceKey] = slots;
    }
  }

  return buildPresetFromMaps({
    id: "preset.product-site.markdown-demo",
    title: "Markdown product site preset",
    description: "Product-site preset generated from Markdown page files.",
    domain: "product",
    bundles: [productDomainBundle, trustDomainBundle],
    pages,
    links,
  });
}
