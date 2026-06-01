import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList } from "../shared.js";

type CategoryCodeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CategoryCodeStructuredData>["data"];
type CategoryCodeSetStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CategoryCodeSetStructuredData>["data"];
type ClassStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ClassStructuredData>["data"];
type CredentialStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CredentialStructuredData>["data"];
type EnumerationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EnumerationStructuredData>["data"];
type InteractionCounterStructuredDataInput = React.ComponentProps<typeof structuredDataReact.InteractionCounterStructuredData>["data"];
type IntegerStructuredDataInput = React.ComponentProps<typeof structuredDataReact.IntegerStructuredData>["data"];
type IntangibleStructuredDataInput = React.ComponentProps<typeof structuredDataReact.IntangibleStructuredData>["data"];
type LanguageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.LanguageStructuredData>["data"];
type ListItemStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ListItemStructuredData>["data"];
type MonetaryAmountStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MonetaryAmountStructuredData>["data"];
type NutritionInformationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.NutritionInformationStructuredData>["data"];
type PropertyStructuredDataInput = React.ComponentProps<typeof structuredDataReact.PropertyStructuredData>["data"];
type PropertyValueStructuredDataInput = React.ComponentProps<typeof structuredDataReact.PropertyValueStructuredData>["data"];
type QuantitativeValueStructuredDataInput = React.ComponentProps<typeof structuredDataReact.QuantitativeValueStructuredData>["data"];
type QuantitativeValueDistributionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.QuantitativeValueDistributionStructuredData>["data"];
type RatingStructuredDataInput = React.ComponentProps<typeof structuredDataReact.RatingStructuredData>["data"];
type StructuredValueStructuredDataInput = React.ComponentProps<typeof structuredDataReact.StructuredValueStructuredData>["data"];
type TypeAndQuantityNodeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.TypeAndQuantityNodeStructuredData>["data"];
type UnitPriceSpecificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.UnitPriceSpecificationStructuredData>["data"];
type ThingStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ThingStructuredData>["data"];
type UrlStructuredDataInput = React.ComponentProps<typeof structuredDataReact.UrlStructuredData>["data"];
type WarrantyPromiseStructuredDataInput = React.ComponentProps<typeof structuredDataReact.WarrantyPromiseStructuredData>["data"];
type XPathTypeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.XPathTypeStructuredData>["data"];

type NamedRef = { name: string; url?: string };

function ref(type: string, value?: NamedRef | string) {
  if (!value) return undefined;
  if (typeof value === "string") return { "@type": type, name: value };
  return { "@type": type, name: value.name, url: value.url };
}

export interface RatingProps {
  name?: string;
  ratingValue: number | string;
  bestRating?: number | string;
  worstRating?: number | string;
  author?: string;
  reviewAspect?: string;
  ratingExplanation?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<RatingStructuredDataInput>;
}

export function Rating(props: RatingProps) {
  const title = props.name ?? "Rating";
  const base: RatingStructuredDataInput = {
    name: props.name,
    ratingValue: props.ratingValue,
    bestRating: props.bestRating,
    worstRating: props.worstRating,
    author: ref("Organization", props.author),
    reviewAspect: props.reviewAspect,
    ratingExplanation: props.ratingExplanation,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.RatingStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="rating"
        title={title}
        eyebrow={props.viewModel?.eyebrow ?? "Rating"}
        meta={[
          { label: "Rating value", value: String(props.ratingValue) },
          props.bestRating !== undefined ? { label: "Best", value: String(props.bestRating) } : null,
          props.worstRating !== undefined ? { label: "Worst", value: String(props.worstRating) } : null,
          props.author ? { label: "Author", value: props.author } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.reviewAspect ? <p>Aspect: {props.reviewAspect}</p> : null}
            {props.ratingExplanation ? <p>{props.ratingExplanation}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface InteractionCounterProps {
  name?: string;
  description?: string;
  userInteractionCount?: number | string;
  interactionService?: string;
  interactionStatistic?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<InteractionCounterStructuredDataInput>;
}

export function InteractionCounter(props: InteractionCounterProps) {
  const title = props.name ?? "Interaction counter";
  const base: InteractionCounterStructuredDataInput = {
    name: props.name,
    description: props.description,
    userInteractionCount: props.userInteractionCount,
    interactionService: ref("WebSite", props.interactionService),
    interactionStatistic: ref("InteractionCounter", props.interactionStatistic),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.InteractionCounterStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="interaction-counter"
        title={title}
        eyebrow={props.viewModel?.eyebrow ?? "Interaction counter"}
        description={props.description}
        meta={[
          props.userInteractionCount !== undefined ? { label: "Count", value: String(props.userInteractionCount) } : null,
          props.interactionService ? { label: "Service", value: props.interactionService } : null,
          props.interactionStatistic ? { label: "Statistic", value: props.interactionStatistic } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface LanguageProps {
  name: string;
  description?: string;
  alternateName?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<LanguageStructuredDataInput>;
}

export function Language(props: LanguageProps) {
  const base: LanguageStructuredDataInput = {
    name: props.name,
    description: props.description,
    alternateName: props.alternateName,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.LanguageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="language"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Language"}
        description={props.description}
        meta={props.alternateName ? [{ label: "Alternate name", value: props.alternateName }] : undefined}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
