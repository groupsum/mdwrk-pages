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

export function buildProductStructuredData(props: ProductProps): ProductStructuredDataInput {
  const structuredImage = typeof props.image === "string" ? props.image : firstImage(props.image);
  const offerUrl = props.offersCta?.href ?? props.url;
  const baseOffers =
    props.price !== undefined || props.priceCurrency || props.availability || offerUrl
      ? { "@type": "Offer", price: props.price, priceCurrency: props.priceCurrency, availability: props.availability, url: offerUrl }
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

export function Product(props: ProductProps) {
  const structuredData = buildProductStructuredData(props);
  const priceLabel =
    props.price !== undefined ? `${props.priceCurrency ? `${props.priceCurrency} ` : ""}${props.price}` : undefined;
  const availabilityLabel = props.availability?.replace(/^https?:\/\/schema\.org\//, "");
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData} kind="Product" data={structuredData}>
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
            {priceLabel || availabilityLabel ? (
              <section className="lander-semantic__product-offer" aria-label="Offer summary">
                {priceLabel ? (
                  <div className="lander-semantic__price-band">
                    <span className="lander-semantic__price-label">Current price</span>
                    <strong className="lander-semantic__price-value">{priceLabel}</strong>
                  </div>
                ) : null}
                {availabilityLabel ? <span className="lander-semantic__availability-chip">{availabilityLabel}</span> : null}
              </section>
            ) : null}
            {(props.brand?.name || props.sku || props.url) ? (
              <dl className="lander-semantic__product-facts">
                {props.brand?.name ? (
                  <div className="lander-semantic__product-fact">
                    <dt>Brand</dt>
                    <dd>{props.brand.name}</dd>
                  </div>
                ) : null}
                {props.sku ? (
                  <div className="lander-semantic__product-fact">
                    <dt>SKU</dt>
                    <dd>{props.sku}</dd>
                  </div>
                ) : null}
                {props.url ? (
                  <div className="lander-semantic__product-fact">
                    <dt>URL</dt>
                    <dd><a href={props.url}>{props.url.replace(/^https?:\/\//, "")}</a></dd>
                  </div>
                ) : null}
              </dl>
            ) : null}
            {props.viewModel?.supportingText ? <p className="lander-semantic__product-supporting">{props.viewModel.supportingText}</p> : null}
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

(Product as typeof Product & { toStructuredData: (props: ProductProps) => unknown }).toStructuredData = (props) =>
  structuredDataReact.buildStructuredDataNode("Product", buildProductStructuredData(props));

export interface ProductGroupProps extends Omit<ProductProps, "structuredDataOverrides"> {
  variesBy?: string | string[];
  hasVariant?: Array<{ name: string }>;
  structuredDataOverrides?: Partial<ProductGroupStructuredDataInput>;
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
