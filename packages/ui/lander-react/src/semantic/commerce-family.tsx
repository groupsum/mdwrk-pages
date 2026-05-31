import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import {
  SemanticShell,
  SemanticStructuredDataGate,
  bodyList,
  definedRegionReference,
  firstImage,
  isRecord,
  mergeRecordLike,
  nonEmptyString,
  renderJsonPreview,
  thingReference,
} from "./shared.js";

type ProductStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ProductStructuredData>["data"];
type ProductGroupStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ProductGroupStructuredData>["data"];
type ReviewStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ReviewStructuredData>["data"];
type AggregateRatingStructuredDataInput = React.ComponentProps<typeof structuredDataReact.AggregateRatingStructuredData>["data"];
type OfferShippingDetailsStructuredDataInput = React.ComponentProps<typeof structuredDataReact.OfferShippingDetailsStructuredData>["data"];
type MerchantReturnPolicyStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MerchantReturnPolicyStructuredData>["data"];
type MerchantReturnPolicySeasonalOverrideStructuredDataInput = React.ComponentProps<
  typeof structuredDataReact.MerchantReturnPolicySeasonalOverrideStructuredData
>["data"];
type MonetaryAmountDistributionStructuredDataInput = React.ComponentProps<
  typeof structuredDataReact.MonetaryAmountDistributionStructuredData
>["data"];
type EmployerAggregateRatingStructuredDataInput = React.ComponentProps<
  typeof structuredDataReact.EmployerAggregateRatingStructuredData
>["data"];

export interface ProductProps {
  name: string;
  description?: string;
  image?: string | string[];
  sku?: string;
  brand?: { name: string };
  price?: number | string;
  priceCurrency?: string;
  availability?: string;
  url?: string;
  offersCta?: { label: string; href: string };
  body?: React.ReactNode;
  viewModel?: { badge?: string; supportingText?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ProductStructuredDataInput>;
}

export interface ProductGroupProps extends Omit<ProductProps, "structuredDataOverrides"> {
  variesBy?: string | string[];
  hasVariant?: Array<{ name: string }>;
  structuredDataOverrides?: Partial<ProductGroupStructuredDataInput>;
}

export interface ReviewProps {
  name: string;
  itemReviewed: string;
  reviewBody?: string;
  author?: { name: string; url?: string };
  ratingValue?: number | string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ReviewStructuredDataInput>;
}

export interface AggregateRatingProps {
  ratingValue: number | string;
  reviewCount?: number;
  ratingCount?: number;
  bestRating?: number | string;
  worstRating?: number | string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<AggregateRatingStructuredDataInput>;
}

export interface OfferShippingDetailsProps {
  name: string;
  merchantReturnDays?: number;
  returnPolicyCategory?: string;
  shippingDestination?: string;
  shippingRate?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<OfferShippingDetailsStructuredDataInput>;
}

export interface MerchantReturnPolicyProps {
  name: string;
  merchantReturnDays?: number;
  returnPolicyCategory?: string;
  shippingDestination?: string;
  shippingRate?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MerchantReturnPolicyStructuredDataInput>;
}

export interface MerchantReturnPolicySeasonalOverrideProps {
  name: string;
  merchantReturnDays?: number;
  returnPolicyCategory?: string;
  startDate?: string;
  endDate?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MerchantReturnPolicySeasonalOverrideStructuredDataInput>;
}

export interface MonetaryAmountDistributionProps {
  name: string;
  description?: string;
  currency?: string;
  median?: number | string;
  percentile10?: number | string;
  percentile90?: number | string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MonetaryAmountDistributionStructuredDataInput>;
}

export interface EmployerAggregateRatingProps extends AggregateRatingProps {
  employerName?: string;
  structuredDataOverrides?: Partial<EmployerAggregateRatingStructuredDataInput>;
}

function buildProductStructuredData(props: ProductProps): ProductStructuredDataInput {
  const structuredImage = typeof props.image === "string" ? props.image : firstImage(props.image);
  const offerUrl = props.offersCta?.href ?? props.url;
  const baseOffers =
    props.price !== undefined || props.priceCurrency || props.availability || offerUrl
      ? {
          "@type": "Offer",
          price: props.price,
          priceCurrency: props.priceCurrency,
          availability: props.availability,
          url: offerUrl,
        }
      : undefined;
  const base: ProductStructuredDataInput = {
    name: props.name,
    description: props.description,
    image: structuredImage,
    sku: props.sku,
    url: props.url,
    brand: props.brand ? { "@type": "Brand", name: props.brand.name } : undefined,
    offers: baseOffers,
  };
  const merged = { ...base, ...(props.structuredDataOverrides ?? {}) };
  if (isRecord(base.brand)) {
    const mergedBrand = mergeRecordLike(base.brand, props.structuredDataOverrides?.brand);
    merged.brand = { ...mergedBrand, name: nonEmptyString(mergedBrand.name) ?? base.brand.name };
  }
  if (isRecord(base.offers)) {
    const mergedOffers = mergeRecordLike(base.offers, props.structuredDataOverrides?.offers);
    merged.offers = {
      ...mergedOffers,
      url: nonEmptyString(mergedOffers.url) ?? base.offers.url,
      priceCurrency: nonEmptyString(mergedOffers.priceCurrency) ?? base.offers.priceCurrency,
      availability: nonEmptyString(mergedOffers.availability) ?? base.offers.availability,
      price: mergedOffers.price ?? base.offers.price,
    };
  }
  merged.name = props.name;
  return merged;
}

export function Product(props: ProductProps) {
  const structuredData = buildProductStructuredData(props);
  const priceLabel =
    props.price !== undefined ? `${props.priceCurrency ? `${props.priceCurrency} ` : ""}${props.price}` : undefined;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ProductStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="product"
        title={props.name}
        eyebrow={props.viewModel?.badge}
        description={props.description}
        meta={[
          props.brand?.name ? { label: "Brand", value: props.brand.name } : null,
          props.sku ? { label: "SKU", value: props.sku } : null,
          priceLabel ? { label: "Price", value: priceLabel } : null,
          props.availability ? { label: "Availability", value: props.availability } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        imageSrc={firstImage(props.image)}
        imageAlt={props.name}
        body={
          <>
            {priceLabel ? (
              <div className="lander-semantic__price-band">
                <span className="lander-semantic__price-label">Current price</span>
                <strong className="lander-semantic__price-value">{priceLabel}</strong>
              </div>
            ) : null}
            {props.viewModel?.supportingText ? <p>{props.viewModel.supportingText}</p> : null}
            {props.body}
          </>
        }
        actions={
          props.offersCta ? (
            <a className="lander-page__button lander-page__button--primary" href={props.offersCta.href}>
              {props.offersCta.label}
            </a>
          ) : null
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function ProductGroup(props: ProductGroupProps) {
  const productBase = buildProductStructuredData(props);
  const structuredData: ProductGroupStructuredDataInput = {
    ...productBase,
    variesBy: props.variesBy,
    hasVariant: props.hasVariant?.map((variant) => ({ "@type": "Product", name: variant.name })),
    ...(props.structuredDataOverrides ?? {}),
  };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ProductGroupStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="product-group"
        title={props.name}
        eyebrow={props.viewModel?.badge ?? "Product group"}
        description={props.description}
        imageSrc={firstImage(props.image)}
        imageAlt={props.name}
        body={
          <>
            {typeof props.variesBy === "string" ? <p className="lander-semantic__varies-by-note">Varies by: {props.variesBy}</p> : null}
            {Array.isArray(props.variesBy) ? (
              <div className="lander-semantic__variation-axes">{bodyList(props.variesBy.map((value) => `Varies by: ${value}`))}</div>
            ) : null}
            {props.hasVariant?.length ? (
              <div className="lander-semantic__variant-list">{bodyList(props.hasVariant.map((value) => value.name))}</div>
            ) : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function Review(props: ReviewProps) {
  const base: ReviewStructuredDataInput = {
    name: props.name,
    itemReviewed: thingReference(props.itemReviewed),
    author: props.author ? { "@type": "Person", name: props.author.name, url: props.author.url } : undefined,
    reviewBody: props.reviewBody,
    reviewRating: props.ratingValue ? { "@type": "Rating", ratingValue: props.ratingValue } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ReviewStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="review"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Review"}
        meta={[
          { label: "Item reviewed", value: props.itemReviewed },
          props.author?.name ? { label: "Author", value: props.author.name } : null,
          props.ratingValue !== undefined ? { label: "Rating", value: String(props.ratingValue) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.ratingValue !== undefined ? (
              <div className="lander-semantic__review-score">
                <span className="lander-semantic__review-score-label">Review rating</span>
                <strong className="lander-semantic__review-score-value">{String(props.ratingValue)}</strong>
              </div>
            ) : null}
            {props.reviewBody ? <blockquote className="lander-semantic__review-quote">{props.reviewBody}</blockquote> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function AggregateRating(props: AggregateRatingProps) {
  const base: AggregateRatingStructuredDataInput = {
    ratingValue: props.ratingValue,
    reviewCount: props.reviewCount,
    ratingCount: props.ratingCount,
    bestRating: props.bestRating,
    worstRating: props.worstRating,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.AggregateRatingStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="aggregate-rating"
        title={props.viewModel?.eyebrow ?? "Aggregate rating"}
        body={
          <>
            <div className="lander-semantic__rating-score">
              <span className="lander-semantic__rating-score-label">Rating value: {String(props.ratingValue)}</span>
              <strong className="lander-semantic__rating-score-value">{String(props.ratingValue)}</strong>
            </div>
            {props.body}
          </>
        }
        meta={[
          props.reviewCount !== undefined ? { label: "Review count", value: String(props.reviewCount) } : null,
          props.ratingCount !== undefined ? { label: "Rating count", value: String(props.ratingCount) } : null,
          props.bestRating !== undefined ? { label: "Best rating", value: String(props.bestRating) } : null,
          props.worstRating !== undefined ? { label: "Worst rating", value: String(props.worstRating) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        footer={props.viewModel?.footer}
        className={props.className}
        as="section"
      />
    </>
  );
}

function policyShell(
  kind: string,
  title: string,
  props: {
    merchantReturnDays?: number;
    returnPolicyCategory?: string;
    shippingDestination?: string;
    shippingRate?: string;
    body?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
  },
) {
  return (
    <SemanticShell
      kind={kind}
      title={title}
      meta={[
        props.merchantReturnDays !== undefined ? { label: "Return days", value: String(props.merchantReturnDays) } : null,
        props.returnPolicyCategory ? { label: "Category", value: props.returnPolicyCategory } : null,
        props.shippingDestination ? { label: "Destination", value: props.shippingDestination } : null,
        props.shippingRate ? { label: "Shipping rate", value: props.shippingRate } : null,
      ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
      body={<div className="lander-semantic__policy-facts">{props.body}</div>}
      footer={props.footer}
      className={props.className}
      as="section"
    />
  );
}

export function OfferShippingDetails(props: OfferShippingDetailsProps) {
  const base: OfferShippingDetailsStructuredDataInput = {
    name: props.name,
    merchantReturnDays: props.merchantReturnDays,
    shippingDestination: definedRegionReference(props.shippingDestination),
    shippingRate: props.shippingRate ? { "@type": "MonetaryAmount", value: props.shippingRate } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.OfferShippingDetailsStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {policyShell("offer-shipping-details", props.name, {
        ...props,
        footer: props.viewModel?.footer,
      })}
    </>
  );
}

export function MerchantReturnPolicy(props: MerchantReturnPolicyProps) {
  const base: MerchantReturnPolicyStructuredDataInput = {
    name: props.name,
    merchantReturnDays: props.merchantReturnDays,
    shippingDestination: definedRegionReference(props.shippingDestination),
    shippingRate: props.shippingRate ? { "@type": "MonetaryAmount", value: props.shippingRate } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MerchantReturnPolicyStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {policyShell("merchant-return-policy", props.name, {
        ...props,
        footer: props.viewModel?.footer,
      })}
    </>
  );
}

export function MerchantReturnPolicySeasonalOverride(props: MerchantReturnPolicySeasonalOverrideProps) {
  const base: MerchantReturnPolicySeasonalOverrideStructuredDataInput = {
    name: props.name,
    merchantReturnDays: props.merchantReturnDays,
    returnPolicyCategory: props.returnPolicyCategory,
    startDate: props.startDate,
    endDate: props.endDate,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MerchantReturnPolicySeasonalOverrideStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {policyShell("merchant-return-policy-seasonal-override", props.name, {
        merchantReturnDays: props.merchantReturnDays,
        returnPolicyCategory: props.returnPolicyCategory,
        body: (
          <>
            {props.startDate ? <p>Starts: {props.startDate}</p> : null}
            {props.endDate ? <p>Ends: {props.endDate}</p> : null}
            {props.body}
          </>
        ),
        footer: props.viewModel?.footer,
        className: props.className,
      })}
    </>
  );
}

export function MonetaryAmountDistribution(props: MonetaryAmountDistributionProps) {
  const base: MonetaryAmountDistributionStructuredDataInput = {
    name: props.name,
    description: props.description,
    currency: props.currency,
    median: props.median,
    percentile10: props.percentile10,
    percentile90: props.percentile90,
  } as MonetaryAmountDistributionStructuredDataInput;
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MonetaryAmountDistributionStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="monetary-amount-distribution"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Monetary distribution"}
        description={props.description}
        meta={[
          props.currency ? { label: "Currency", value: props.currency } : null,
          props.median !== undefined ? { label: "Median", value: String(props.median) } : null,
          props.percentile10 !== undefined ? { label: "P10", value: String(props.percentile10) } : null,
          props.percentile90 !== undefined ? { label: "P90", value: String(props.percentile90) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        children={
          <div className="lander-semantic__distribution-grid">
            {props.median !== undefined ? (
              <div className="lander-semantic__distribution-stat">
                <span>Median</span>
                <strong>{String(props.median)}</strong>
              </div>
            ) : null}
            {props.percentile10 !== undefined ? (
              <div className="lander-semantic__distribution-stat">
                <span>P10</span>
                <strong>{String(props.percentile10)}</strong>
              </div>
            ) : null}
            {props.percentile90 !== undefined ? (
              <div className="lander-semantic__distribution-stat">
                <span>P90</span>
                <strong>{String(props.percentile90)}</strong>
              </div>
            ) : null}
          </div>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function EmployerAggregateRating(props: EmployerAggregateRatingProps) {
  const base: EmployerAggregateRatingStructuredDataInput = {
    ratingValue: props.ratingValue,
    reviewCount: props.reviewCount,
    ratingCount: props.ratingCount,
    bestRating: props.bestRating,
    worstRating: props.worstRating,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.EmployerAggregateRatingStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="employer-aggregate-rating"
        title={props.employerName ?? "Employer aggregate rating"}
        eyebrow={props.viewModel?.eyebrow ?? "Employer rating"}
        body={
          <>
            <div className="lander-semantic__rating-score">
              <span className="lander-semantic__rating-score-label">Employer rating</span>
              <strong className="lander-semantic__rating-score-value">{String(props.ratingValue)}</strong>
            </div>
            {props.body}
          </>
        }
        meta={[
          props.reviewCount !== undefined ? { label: "Review count", value: String(props.reviewCount) } : null,
          props.ratingCount !== undefined ? { label: "Rating count", value: String(props.ratingCount) } : null,
          props.bestRating !== undefined ? { label: "Best rating", value: String(props.bestRating) } : null,
          props.worstRating !== undefined ? { label: "Worst rating", value: String(props.worstRating) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
