import type { PricingPlanSpec, PricingSection, PageSpec } from "@mdwrk/lander-content-contract";
import type { CommercePlan, CommerceProduct } from "@mdwrk/lander-commerce-contract";
import type { CompiledLanderSite, CompiledPage } from "@mdwrk/lander-core";
import {
  getSubscriptionStoreHomeNavigation,
  subscriptionStoreContentPack,
} from "@mdwrk/subscription-store-content-pack";

export interface StoreRouteNode {
  pageId: string;
  title: string;
  path: string;
  kind: string;
  summary: string;
}

export interface StoreCommerceCatalog {
  product: CommerceProduct;
  plans: CommercePlan[];
}

export interface SubscriptionStoreDemoSite {
  site: CompiledLanderSite;
  pages: CompiledPage[];
  routeNodes: StoreRouteNode[];
  commerceCatalog: StoreCommerceCatalog;
  diagnostics: string[];
}

const DEFAULT_ORIGIN = "http://localhost:4192";

export function normalizeRouteSlug(value: string): string {
  const trimmed = String(value ?? "").trim();
  if (!trimmed || trimmed === "/") return "/";
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}/`;
}

function canonicalForSlug(productUrl: string, slug: string): string {
  return `${productUrl.replace(/\/+$/, "")}${normalizeRouteSlug(slug)}`;
}

function buildBreadcrumbs(page: { slug: string; h1: string }) {
  const slug = normalizeRouteSlug(page.slug);
  if (slug === "/") return [{ label: page.h1, href: "/" }];
  const parts = slug.replace(/^\/|\/$/g, "").split("/");
  const crumbs = [{ label: "Home", href: "/" }];
  let cursor = "";
  for (const part of parts) {
    cursor += `/${part}`;
    crumbs.push({
      label: part.replace(/-/g, " ").replace(/\b\w/g, (value) => value.toUpperCase()),
      href: normalizeRouteSlug(cursor),
    });
  }
  crumbs[crumbs.length - 1] = { label: page.h1, href: slug };
  return crumbs;
}

function pageWordCount(page: PageSpec): number {
  const text = [
    page.title,
    page.description,
    page.h1,
    page.intro,
    ...page.sections.flatMap((section) => {
      if ("body" in section && typeof section.body === "string") return [section.title, section.body];
      if ("subtitle" in section && typeof section.subtitle === "string") return [section.title, section.subtitle];
      if ("items" in section && Array.isArray(section.items)) {
        return [section.title, ...section.items.flatMap((item) => {
          if ("title" in item && "description" in item) return [item.title, item.description];
          if ("question" in item && "answer" in item) return [item.question, item.answer];
          return [];
        })];
      }
      if ("plans" in section && Array.isArray(section.plans)) {
        return [section.title, ...section.plans.flatMap((plan) => [plan.name, plan.summary, plan.price, ...(plan.featureBullets ?? [])])];
      }
      return [section.title];
    }),
  ].filter(Boolean).join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

function compileDemoSite(input: Omit<CompiledLanderSite, "pages" | "pageByPath" | "diagnostics"> & { pages: PageSpec[] }): CompiledLanderSite {
  const pages = input.pages.map((page): CompiledPage => {
    const path = normalizeRouteSlug(page.slug);
    const canonicalUrl = page.seo?.canonical ?? canonicalForSlug(input.product.canonicalUrl, path);
    return {
      ...page,
      slug: path,
      path,
      canonicalUrl,
      breadcrumbs: buildBreadcrumbs({ slug: path, h1: page.h1 }),
      internalLinks: [],
      wordCount: pageWordCount(page),
      componentIntents: (page.componentIntents ?? []).map((intent) => ({ ...intent, pagePath: path, source: "declared" })),
      schemaIntents: (page.schema ?? []).map((intent, index) => ({
        ...intent,
        id: intent.id ?? `${path}#schema-${index + 1}`,
        pagePath: path,
        source: "schema",
      })),
    };
  });

  return {
    ...input,
    pages,
    pageByPath: new Map(pages.map((page) => [page.path, page])),
    diagnostics: [],
  };
}

function findPricingSection(page: PageSpec | undefined): PricingSection | undefined {
  return page?.sections.find((section): section is PricingSection => section.kind === "pricing");
}

function parseInterval(value?: string): CommercePlan["price"]["billingInterval"] {
  switch (value) {
    case "day":
    case "daily":
      return "daily";
    case "week":
    case "weekly":
      return "weekly";
    case "month":
    case "mo":
    case "monthly":
      return "monthly";
    case "quarter":
    case "quarterly":
      return "quarterly";
    case "year":
    case "yr":
    case "yearly":
      return "yearly";
    default:
      return "monthly";
  }
}

function parseAmount(value: string): number {
  const numeric = Number.parseFloat(value.replace(/[^0-9.]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function toCommercePlan(plan: PricingPlanSpec): CommercePlan {
  return {
    id: plan.id,
    name: plan.name,
    description: plan.summary,
    price: {
      amount: parseAmount(plan.price),
      currency: "USD",
      billingInterval: parseInterval(plan.interval),
    },
    featureBullets: plan.featureBullets,
    metadata: {
      featured: plan.featured ?? false,
      badge: plan.badge,
      cta: plan.cta,
      rawPrice: plan.price,
      rawInterval: plan.interval,
    },
  };
}

function buildCommerceCatalog(): StoreCommerceCatalog {
  const pricingPage = subscriptionStoreContentPack.pages.find((page) => page.slug === "/store/pricing/");
  const pricing = findPricingSection(pricingPage);
  const plans = (pricing?.plans ?? []).map(toCommercePlan);
  return {
    product: {
      id: "markdown-store-workspace",
      name: "Markdown Store Workspace",
      description: "Local-first publishing workspace with recurring subscription plans.",
      href: "/store/product/",
      plans,
      metadata: {
        presetId: "preset.subscription-store",
      },
    },
    plans,
  };
}

export function createSubscriptionStoreDemoSite(origin = DEFAULT_ORIGIN): SubscriptionStoreDemoSite {
  const site = compileDemoSite({
    product: {
      name: "Markdown Store",
      slug: "markdown-store",
      tagline: "Subscription storefront for Markdown-first publishing workflows.",
      description: "A demo storefront showing MdWrk Pages product templates together with the opt-in commerce React package.",
      category: "SoftwareApplication",
      canonicalUrl: origin,
    },
    nav: {
      primary: [
        { label: "Store", href: "/store/" },
        { label: "Catalog", href: "/store/catalog/" },
        { label: "Pricing", href: "/store/pricing/" },
        { label: "Billing", href: "/store/support/billing/" },
      ],
    },
    footer: {
      links: [
        { label: "Privacy", href: "/store/privacy/" },
        { label: "Terms", href: "/store/terms/" },
        { label: "Refunds", href: "/store/refunds/" },
      ],
      note: "Markdown Store keeps storefront pages, cart controls, and machine-readable metadata aligned from one compiled source.",
    },
    ai: {
      summary: "A storefront demo combining page templates, structured data, and opt-in commerce UI.",
      coreFacts: [
        "Storefront pages come from the subscription store content pack.",
        "Cart and checkout controls come from the commerce React package.",
        "Visible pages and JSON-LD output share the same compiled source pages.",
      ],
    },
    pages: [...subscriptionStoreContentPack.pages],
  });

  const routeNodes = site.pages.map((page) => ({
    pageId: page.slug,
    title: page.title,
    path: page.slug,
    kind: page.kind,
    summary: page.description,
  }));

  const diagnostics = [...subscriptionStoreContentPack.diagnostics, ...site.diagnostics].map(
    (item) => `${item.level}:${item.code}:${item.message}`,
  );

  return {
    site,
    pages: site.pages,
    routeNodes,
    commerceCatalog: buildCommerceCatalog(),
    diagnostics,
  };
}

export const subscriptionStoreHomeNavigation = getSubscriptionStoreHomeNavigation();
