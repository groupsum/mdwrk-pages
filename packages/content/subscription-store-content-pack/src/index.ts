import type { PageSpec } from "@mdwrk/lander-content-contract";
import { createSubscriptionStorePreset, getPresetEntryPageId } from "@mdwrk/lander-page-template-presets";
import { buildPageSpecsFromGraph, deriveTemplateNavigation, resolveLinkSlots } from "@mdwrk/lander-page-templates";
import { SUBSCRIPTION_STORE_CONTENT_PACK_VERSION } from "./version.js";

export { SUBSCRIPTION_STORE_CONTENT_PACK_VERSION };

export const SUBSCRIPTION_STORE_CONTENT_PACK_NAME = "@mdwrk/subscription-store-content-pack";

export const subscriptionStorePreset = createSubscriptionStorePreset({
  baseSlug: "/store",
  title: "Markdown Store",
  description: "A subscription storefront for Markdown-first publishing workflows.",
  pages: {
    home: {
      title: "Markdown Store",
      description: "Subscription storefront home page.",
      data: {
        summary: "Sell a Markdown-first product with clean pricing, support, and trust paths.",
        intro: "This content pack turns the subscription-store preset into a launch-ready storefront graph.",
        featureCards: [
          { title: "Catalog", description: "Browse editor plans and bundle details.", href: "/store/catalog/" },
          { title: "Pricing", description: "Compare plan features and recurring price points.", href: "/store/pricing/" },
          { title: "Billing FAQ", description: "Answer billing, invoicing, and cancellation questions.", href: "/store/support/billing/" }
        ],
      },
    },
    catalog: {
      title: "Store Catalog",
      description: "Browse the storefront catalog.",
      data: {
        summary: "Choose the best plan for solo writing or team publishing.",
        packageCards: [
          { name: "Basic Plan", description: "Solo writer plan with local drafts and export.", href: "/store/pricing/basic/", install: "$9/mo" },
          { name: "Team Plan", description: "Shared publishing workflows for small editorial teams.", href: "/store/pricing/", install: "$24/mo" }
        ],
      },
    },
    product: {
      title: "Markdown Store Workspace",
      description: "Workspace overview for the storefront product.",
      data: {
        summary: "Write locally, publish cleanly, and keep support and trust pages connected.",
        packageCards: [
          { name: "Workspace", description: "Local-first editor with reusable publishing workflows.", href: "/store/product/" },
          { name: "Publishing", description: "Static export and structured-data-ready publishing.", href: "/store/features/editor/" }
        ],
      },
    },
    feature: {
      title: "Editor Workflow",
      description: "Primary feature page.",
      data: {
        summary: "Move from raw Markdown to polished output without breaking the authoring flow.",
      },
    },
    pricing: {
      title: "Subscription Pricing",
      description: "Compare subscription plans.",
      data: {
        summary: "Choose a plan, compare the feature surface, and route into checkout.",
        pricingPlans: [
          {
            id: "basic",
            name: "Basic",
            summary: "For solo drafting and publishing.",
            price: "$9",
            interval: "mo",
            featureBullets: ["1 workspace", "Static export", "Email support"],
            cta: { label: "Choose Basic", href: "/store/pricing/basic/", variant: "primary" },
          },
          {
            id: "team",
            name: "Team",
            summary: "For collaborative publishing teams.",
            price: "$24",
            interval: "mo",
            badge: "Popular",
            featured: true,
            featureBullets: ["5 workspaces", "Shared publishing", "Priority support"],
            cta: { label: "Choose Team", href: "/store/pricing/", variant: "primary" },
          }
        ],
        pricingComparisonRows: [
          { id: "workspaces", label: "Workspaces", values: { basic: "1", team: "5" } },
          { id: "support", label: "Support", values: { basic: "Email", team: "Priority" } },
          { id: "publishing", label: "Publishing", values: { basic: "Static export", team: "Shared workflows" } }
        ],
        pricingFooterNote: "Annual billing discounts and enterprise terms can be layered by a consuming storefront app.",
      },
    },
    planDetail: {
      title: "Basic Plan",
      description: "Basic plan detail page.",
      data: {
        summary: "A lightweight subscription for individual writers and publishers.",
        pricingPlans: [
          {
            id: "basic",
            name: "Basic",
            summary: "Best for solo drafting.",
            price: "$9",
            interval: "mo",
            featureBullets: ["1 workspace", "Static export", "Email support"],
            cta: { label: "Start Basic", href: "/store/pricing/basic/", variant: "primary" },
          }
        ],
      },
    },
    support: {
      title: "Support",
      description: "Support hub page.",
      data: {
        summary: "Route customers to billing, product, and trust-related help.",
        supportChannels: [
          { title: "Billing help", description: "Resolve invoicing, cancellations, and subscription changes.", href: "/store/support/billing/", label: "Billing" },
          { title: "Product support", description: "Get help with authoring and publishing workflows.", href: "/store/support/", label: "Support" }
        ],
      },
    },
    billing: {
      title: "Billing FAQ",
      description: "Billing and subscription support page.",
      data: {
        summary: "Answer the common billing and renewal questions before checkout.",
        faq: [
          { question: "Can I cancel any time?", answer: "Yes. Cancellation stops the next renewal period." },
          { question: "Do you offer invoices?", answer: "Team plans can request invoicing through billing support." }
        ],
        supportChannels: [
          { title: "Billing inbox", description: "Escalate a billing issue with the subscription team.", href: "/store/support/billing/", label: "Contact" }
        ],
      },
    },
    privacy: {
      title: "Privacy",
      description: "Privacy page.",
      data: {
        summary: "Customer content stays scoped to the publishing workflow and its configured integrations.",
        policyHighlights: [
          { title: "Content ownership", summary: "You retain ownership of your Markdown content." },
          { title: "Limited processing", summary: "Publishing metadata is processed only to fulfill export and routing tasks." }
        ],
      },
    },
    terms: {
      title: "Terms",
      description: "Terms page.",
      data: {
        summary: "The service is offered on recurring subscription terms with clear upgrade and cancellation expectations.",
        policyHighlights: [
          { title: "Recurring billing", summary: "Subscriptions renew automatically until cancellation." },
          { title: "Plan changes", summary: "Upgrades take effect immediately; downgrades apply at the next renewal." }
        ],
      },
    },
    refunds: {
      title: "Refunds",
      description: "Refund policy page.",
      data: {
        summary: "Review refund windows, cancellation timing, and how billing support handles disputes.",
        policyHighlights: [
          { title: "Cancellation window", summary: "Cancel before the next renewal to avoid the next charge." },
          { title: "Refund review", summary: "Refund requests are reviewed case by case for recent renewals." }
        ],
        supportChannels: [
          { title: "Billing support", description: "Contact the billing team to review a refund or disputed renewal.", href: "/store/support/billing/", label: "Contact billing" }
        ],
      },
    },
  },
  links: {
    home: {
      children: ["catalog", "product", "feature", "pricing", "planDetail"],
      support: ["support", "billing"],
      legal: ["privacy", "terms", "refunds"],
    },
    catalog: {
      products: ["product", "planDetail"],
      pricing: ["pricing"],
    },
    support: {
      questions: ["billing"],
      support: ["billing"],
    },
  },
});

const homePageId = getPresetEntryPageId(subscriptionStorePreset) ?? "store:home";
const compiled = buildPageSpecsFromGraph(subscriptionStorePreset.graph);

export interface SubscriptionStoreContentPack {
  packageName: typeof SUBSCRIPTION_STORE_CONTENT_PACK_NAME;
  version: typeof SUBSCRIPTION_STORE_CONTENT_PACK_VERSION;
  presetId: string;
  domain: string;
  pages: readonly PageSpec[];
  diagnostics: Readonly<typeof compiled.diagnostics>;
}

export const subscriptionStoreContentPack: SubscriptionStoreContentPack = Object.freeze({
  packageName: SUBSCRIPTION_STORE_CONTENT_PACK_NAME,
  version: SUBSCRIPTION_STORE_CONTENT_PACK_VERSION,
  presetId: subscriptionStorePreset.id,
  domain: subscriptionStorePreset.domain,
  pages: Object.freeze(compiled.pages),
  diagnostics: Object.freeze(compiled.diagnostics),
});

export function getSubscriptionStorePage(slug: string): PageSpec | undefined {
  return subscriptionStoreContentPack.pages.find((page) => page.slug === slug);
}

export function getSubscriptionStoreHomeNavigation() {
  return deriveTemplateNavigation(subscriptionStorePreset.graph, homePageId);
}

export function getSubscriptionStoreHomeLinks() {
  return resolveLinkSlots(subscriptionStorePreset.graph, homePageId);
}
