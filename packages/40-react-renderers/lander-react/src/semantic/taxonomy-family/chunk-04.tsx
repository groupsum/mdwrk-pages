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

export interface WarrantyPromiseProps {
  name: string;
  description?: string;
  durationOfWarranty?: number | string;
  warrantyScope?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<WarrantyPromiseStructuredDataInput>;
}

export function WarrantyPromise(props: WarrantyPromiseProps) {
  const base: WarrantyPromiseStructuredDataInput = {
    name: props.name,
    description: props.description,
    durationOfWarranty: props.durationOfWarranty,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.WarrantyPromiseStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="warranty-promise"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Warranty promise"}
        description={props.description}
        meta={[
          props.durationOfWarranty !== undefined ? { label: "Duration", value: String(props.durationOfWarranty) } : null,
          props.warrantyScope ? { label: "Scope", value: props.warrantyScope } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface EnumerationProps {
  name: string;
  description?: string;
  supersededBy?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<EnumerationStructuredDataInput>;
}

export function Enumeration(props: EnumerationProps) {
  const base: EnumerationStructuredDataInput = {
    name: props.name,
    description: props.description,
    supersededBy: ref("Enumeration", props.supersededBy),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.EnumerationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="enumeration"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Enumeration"}
        description={props.description}
        meta={props.supersededBy ? [{ label: "Superseded by", value: props.supersededBy }] : undefined}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface IntegerProps {
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<IntegerStructuredDataInput>;
}

export function Integer(props: IntegerProps) {
  const structuredData = { ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.IntegerStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="integer"
        title={props.label ?? "Integer"}
        eyebrow={props.viewModel?.eyebrow ?? "Integer"}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
