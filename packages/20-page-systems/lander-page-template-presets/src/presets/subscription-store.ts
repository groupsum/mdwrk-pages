import { productDomainBundle, supportDomainBundle, trustDomainBundle } from "@mdwrk/lander-page-templates";
import type { PageTemplatePreset, PresetOptions } from "../types.js";
import { buildPresetFromMaps, mergePresetLinks, mergePresetPages } from "../authoring.js";
import { presetSlug } from "../types.js";

export function createSubscriptionStorePreset(options: PresetOptions = {}): PageTemplatePreset {
  const title = options.title ?? "Subscription Store";
  const description = options.description ?? "A subscription storefront with product, pricing, billing support, and trust pages.";
  return buildPresetFromMaps({
    id: "preset.subscription-store",
    title: "Subscription store preset",
    description,
    domain: "product",
    entryPageKey: "home",
    bundles: [productDomainBundle, supportDomainBundle, trustDomainBundle],
    pages: mergePresetPages({
      home: { id: "store:home", templateId: "product.home", slug: presetSlug(options.baseSlug), title, description, summary: "Introduce the storefront, core offer, and buying paths." },
      catalog: { id: "store:catalog", templateId: "product.catalog", slug: presetSlug(options.baseSlug, "catalog"), title: "Catalog", description: "Browse products and plans.", summary: "Review the storefront catalog.", order: 1 },
      product: { id: "store:product", templateId: "product.product", slug: presetSlug(options.baseSlug, "product"), title: `${title} Overview`, description: "Product overview page.", summary: "Explain the product and who it is for.", order: 2 },
      feature: { id: "store:feature", templateId: "product.feature", slug: presetSlug(options.baseSlug, "features/editor"), title: "Editor Workflow", description: "Feature detail page.", summary: "Show the primary workflow advantage.", order: 3 },
      pricing: { id: "store:pricing", templateId: "product.pricing", slug: presetSlug(options.baseSlug, "pricing"), title: "Pricing", description: "Subscription pricing page.", summary: "Compare plans and checkout paths.", order: 4 },
      planDetail: { id: "store:plan-basic", templateId: "product.plan-detail", slug: presetSlug(options.baseSlug, "pricing/basic"), title: "Basic Plan", description: "Basic plan detail page.", summary: "Review the base subscription plan.", order: 5 },
      support: { id: "store:support", templateId: "support.hub", slug: presetSlug(options.baseSlug, "support"), title: "Support", description: "Support routing page.", summary: "Find support and billing help.", order: 6 },
      billing: { id: "store:billing", templateId: "support.billing", slug: presetSlug(options.baseSlug, "support/billing"), title: "Billing FAQ", description: "Billing and subscription support page.", summary: "Resolve billing and subscription questions.", order: 7 },
      privacy: { id: "store:privacy", templateId: "trust.privacy", slug: presetSlug(options.baseSlug, "privacy"), title: "Privacy", description: "Privacy page.", summary: "Review privacy commitments.", order: 8 },
      terms: { id: "store:terms", templateId: "trust.terms", slug: presetSlug(options.baseSlug, "terms"), title: "Terms", description: "Terms page.", summary: "Review the terms of service.", order: 9 },
      refunds: { id: "store:refunds", templateId: "trust.refunds", slug: presetSlug(options.baseSlug, "refunds"), title: "Refunds", description: "Refund policy page.", summary: "Understand refunds and cancellation.", order: 10 },
    }, options.pages),
    links: mergePresetLinks({
      home: {
        children: ["catalog", "product", "feature", "pricing", "planDetail"],
        support: ["support", "billing"],
        legal: ["privacy", "terms", "refunds"],
      },
      catalog: {
        products: ["product", "planDetail"],
        pricing: ["pricing"],
      },
      product: {
        children: ["feature", "pricing", "planDetail"],
      },
      support: {
        questions: ["billing"],
        support: ["billing"],
      },
    }, options.links),
  });
}
