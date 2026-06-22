import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticStructuredDataGate, firstImage, isRecord, joinClassNames, mergeRecordLike, nonEmptyString } from "./shared.js";

type ProductStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ProductStructuredData>["data"];

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

export function buildProductStructuredData(props: ProductProps): ProductStructuredDataInput {
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
    merged.brand = {
      ...mergedBrand,
      name: nonEmptyString(mergedBrand.name) ?? base.brand.name,
    };
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

export function Product({
  name,
  description,
  image,
  sku,
  brand,
  price,
  priceCurrency,
  availability,
  url,
  offersCta,
  body,
  viewModel,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
}: ProductProps) {
  const structuredData = buildProductStructuredData({
    name,
    description,
    image,
    sku,
    brand,
    price,
    priceCurrency,
    availability,
    url,
    offersCta,
    body,
    viewModel,
    className,
    emitStructuredData,
    structuredDataOverrides,
  });
  const heroImage = firstImage(image);
  const priceValue = price !== undefined ? `${priceCurrency ? `${priceCurrency} ` : ""}${price}` : undefined;

  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData} kind="Product" data={structuredData}>
        <structuredDataReact.ProductStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <article className={joinClassNames("lander-semantic", "lander-semantic--product", className)}>
        <header className="lander-semantic__header">
          {viewModel?.badge ? <p className="lander-semantic__eyebrow">{viewModel.badge}</p> : null}
          <h1 className="lander-semantic__title">{name}</h1>
          {description ? <p className="lander-semantic__description">{description}</p> : null}
          {viewModel?.supportingText ? <p className="lander-semantic__product-supporting">{viewModel.supportingText}</p> : null}
        </header>
        {heroImage ? <img className="lander-semantic__image" src={heroImage} alt={name} /> : null}
        <div className="lander-semantic__body">
          {priceValue || availability ? (
            <section className="lander-semantic__product-offer" aria-label="Offer summary">
              {priceValue ? (
                <div className="lander-semantic__price-band">
                  <span className="lander-semantic__price-label">Price</span>
                  <strong className="lander-semantic__price-value">{priceValue}</strong>
                </div>
              ) : null}
              {availability ? (
                <span className="lander-semantic__availability-chip">{availability.replace(/^https?:\/\/schema\.org\//, "")}</span>
              ) : null}
            </section>
          ) : null}
          {(brand?.name || sku || url) ? (
            <dl className="lander-semantic__product-facts">
              {brand?.name ? (
                <div className="lander-semantic__product-fact">
                  <dt>Brand</dt>
                  <dd>{brand.name}</dd>
                </div>
              ) : null}
              {sku ? (
                <div className="lander-semantic__product-fact">
                  <dt>SKU</dt>
                  <dd>{sku}</dd>
                </div>
              ) : null}
              {url ? (
                <div className="lander-semantic__product-fact">
                  <dt>URL</dt>
                  <dd><a href={url}>{url.replace(/^https?:\/\//, "")}</a></dd>
                </div>
              ) : null}
            </dl>
          ) : null}
          {body}
        </div>
        {offersCta ? (
          <p className="lander-semantic__actions">
            <a className="lander-page__button lander-page__button--primary" href={offersCta.href}>
              {offersCta.label}
            </a>
          </p>
        ) : null}
        {viewModel?.footer ? <footer className="lander-semantic__footer">{viewModel.footer}</footer> : null}
      </article>
    </>
  );
}

(Product as typeof Product & { toStructuredData: (props: ProductProps) => unknown }).toStructuredData = (props) =>
  structuredDataReact.buildStructuredDataNode("Product", buildProductStructuredData(props));
