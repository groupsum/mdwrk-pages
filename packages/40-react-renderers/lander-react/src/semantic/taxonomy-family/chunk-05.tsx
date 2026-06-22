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

export interface QuantitativeValueProps {
  name?: string;
  description?: string;
  value?: string | number | boolean;
  unitCode?: string;
  unitText?: string;
  minValue?: number | string;
  maxValue?: number | string;
  valueReference?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<QuantitativeValueStructuredDataInput>;
}

export function QuantitativeValue(props: QuantitativeValueProps) {
  const title = props.name ?? "Quantitative value";
  const base: QuantitativeValueStructuredDataInput = {
    name: props.name,
    description: props.description,
    value: props.value,
    unitCode: props.unitCode,
    unitText: props.unitText,
    minValue: props.minValue,
    maxValue: props.maxValue,
    valueReference: ref("Thing", props.valueReference),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.QuantitativeValueStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="quantitative-value"
        title={title}
        eyebrow={props.viewModel?.eyebrow ?? "Quantitative value"}
        description={props.description}
        meta={[
          props.value !== undefined ? { label: "Value", value: String(props.value) } : null,
          props.unitCode ? { label: "Unit code", value: props.unitCode } : null,
          props.unitText ? { label: "Unit text", value: props.unitText } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {(props.minValue !== undefined || props.maxValue !== undefined) ? (
              <p>{props.minValue !== undefined ? `Min ${props.minValue}` : null}{props.minValue !== undefined && props.maxValue !== undefined ? " / " : null}{props.maxValue !== undefined ? `Max ${props.maxValue}` : null}</p>
            ) : null}
            {props.valueReference ? <p>Reference: {props.valueReference}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface QuantitativeValueDistributionProps {
  name?: string;
  currency?: string;
  median?: number | string;
  percentile10?: number | string;
  percentile25?: number | string;
  percentile75?: number | string;
  percentile90?: number | string;
  duration?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<QuantitativeValueDistributionStructuredDataInput>;
}

export function QuantitativeValueDistribution(props: QuantitativeValueDistributionProps) {
  const title = props.name ?? "Quantitative value distribution";
  const base: QuantitativeValueDistributionStructuredDataInput = {
    name: props.name,
    currency: props.currency,
    median: props.median,
    percentile10: props.percentile10,
    percentile25: props.percentile25,
    percentile75: props.percentile75,
    percentile90: props.percentile90,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.QuantitativeValueDistributionStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="quantitative-value-distribution"
        title={title}
        eyebrow={props.viewModel?.eyebrow ?? "Quantitative value distribution"}
        meta={[
          props.currency ? { label: "Currency", value: props.currency } : null,
          props.duration ? { label: "Duration", value: props.duration } : null,
          props.median !== undefined ? { label: "Median", value: String(props.median) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            <p>
              {props.percentile10 !== undefined ? `P10 ${props.percentile10}` : null}
              {props.percentile25 !== undefined ? ` | P25 ${props.percentile25}` : null}
              {props.percentile75 !== undefined ? ` | P75 ${props.percentile75}` : null}
              {props.percentile90 !== undefined ? ` | P90 ${props.percentile90}` : null}
            </p>
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface MonetaryAmountProps {
  name?: string;
  currency?: string;
  value?: string | number | boolean;
  minValue?: number | string;
  maxValue?: number | string;
  validFrom?: string;
  validThrough?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MonetaryAmountStructuredDataInput>;
}

export function MonetaryAmount(props: MonetaryAmountProps) {
  const title = props.name ?? "Monetary amount";
  const base: MonetaryAmountStructuredDataInput = {
    name: props.name,
    currency: props.currency,
    value: props.value,
    minValue: props.minValue,
    maxValue: props.maxValue,
    validFrom: props.validFrom,
    validThrough: props.validThrough,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MonetaryAmountStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="monetary-amount"
        title={title}
        eyebrow={props.viewModel?.eyebrow ?? "Monetary amount"}
        meta={[
          props.currency ? { label: "Currency", value: props.currency } : null,
          props.value !== undefined ? { label: "Value", value: String(props.value) } : null,
          props.validFrom ? { label: "Valid from", value: props.validFrom } : null,
          props.validThrough ? { label: "Valid through", value: props.validThrough } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {(props.minValue !== undefined || props.maxValue !== undefined) ? (
              <p>{props.minValue !== undefined ? `Min ${props.minValue}` : null}{props.minValue !== undefined && props.maxValue !== undefined ? " / " : null}{props.maxValue !== undefined ? `Max ${props.maxValue}` : null}</p>
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
