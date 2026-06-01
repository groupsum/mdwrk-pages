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
} from "../shared.js";

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
