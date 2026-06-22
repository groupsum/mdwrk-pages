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

export interface ThingProps {
  name: string;
  description?: string;
  alternateName?: string;
  url?: string;
  sameAs?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ThingStructuredDataInput>;
}

export function Thing(props: ThingProps) {
  const base: ThingStructuredDataInput = {
    name: props.name,
    description: props.description,
    alternateName: props.alternateName,
    url: props.url,
    sameAs: props.sameAs,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ThingStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="thing"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Thing"}
        description={props.description}
        meta={[
          props.alternateName ? { label: "Alternate name", value: props.alternateName } : null,
          props.url ? { label: "URL", value: props.url } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.sameAs?.length ? <div className="lander-semantic__thing-same-as">{bodyList(props.sameAs)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface CategoryCodeProps {
  name: string;
  description?: string;
  termCode?: string;
  codeValue?: string;
  inCodeSet?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CategoryCodeStructuredDataInput>;
}

export function CategoryCode(props: CategoryCodeProps) {
  const base: CategoryCodeStructuredDataInput = {
    name: props.name,
    description: props.description,
    termCode: props.termCode,
    codeValue: props.codeValue,
    inCodeSet: ref("CategoryCodeSet", props.inCodeSet),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CategoryCodeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="category-code"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Category code"}
        description={props.description}
        meta={[
          props.termCode ? { label: "Term code", value: props.termCode } : null,
          props.codeValue ? { label: "Code value", value: props.codeValue } : null,
          props.inCodeSet ? { label: "Code set", value: props.inCodeSet } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface CategoryCodeSetProps {
  name: string;
  description?: string;
  hasCategoryCode?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CategoryCodeSetStructuredDataInput>;
}

export function CategoryCodeSet(props: CategoryCodeSetProps) {
  const base: CategoryCodeSetStructuredDataInput = {
    name: props.name,
    description: props.description,
    hasCategoryCode: props.hasCategoryCode?.map((entry) => ref("CategoryCode", entry)),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CategoryCodeSetStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="category-code-set"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Category code set"}
        description={props.description}
        body={<>{props.hasCategoryCode?.length ? <div className="lander-semantic__category-code-set-list">{bodyList(props.hasCategoryCode)}</div> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
