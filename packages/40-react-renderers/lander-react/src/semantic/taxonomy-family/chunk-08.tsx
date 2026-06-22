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

export interface PropertyValueProps {
  name: string;
  description?: string;
  propertyID?: string;
  value?: string | number | boolean;
  unitCode?: string;
  unitText?: string;
  minValue?: number | string;
  maxValue?: number | string;
  measurementMethod?: string;
  measurementTechnique?: string;
  valueReference?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<PropertyValueStructuredDataInput>;
}

export function PropertyValue(props: PropertyValueProps) {
  const base: PropertyValueStructuredDataInput = {
    name: props.name,
    description: props.description,
    propertyID: props.propertyID,
    value: props.value,
    unitCode: props.unitCode,
    unitText: props.unitText,
    minValue: props.minValue,
    maxValue: props.maxValue,
    measurementMethod: props.measurementMethod,
    measurementTechnique: props.measurementTechnique,
    valueReference: ref("Thing", props.valueReference),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.PropertyValueStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="property-value"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Property value"}
        description={props.description}
        meta={[
          props.propertyID ? { label: "Property ID", value: props.propertyID } : null,
          props.value !== undefined ? { label: "Value", value: String(props.value) } : null,
          props.unitCode ? { label: "Unit code", value: props.unitCode } : null,
          props.unitText ? { label: "Unit text", value: props.unitText } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {(props.minValue !== undefined || props.maxValue !== undefined) ? (
              <p>{props.minValue !== undefined ? `Min ${props.minValue}` : null}{props.minValue !== undefined && props.maxValue !== undefined ? " / " : null}{props.maxValue !== undefined ? `Max ${props.maxValue}` : null}</p>
            ) : null}
            {props.measurementMethod ? <p>Method: {props.measurementMethod}</p> : null}
            {props.measurementTechnique ? <p>Technique: {props.measurementTechnique}</p> : null}
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

export interface URLProps {
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<UrlStructuredDataInput>;
}

export type UrlProps = URLProps;

export function URL(props: URLProps) {
  const structuredData = { ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.UrlStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="url"
        title={props.label ?? "URL"}
        eyebrow={props.viewModel?.eyebrow ?? "URL"}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface XPathTypeProps {
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<XPathTypeStructuredDataInput>;
}

export function XPathType(props: XPathTypeProps) {
  const structuredData = { ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.XPathTypeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="xpath-type"
        title={props.label ?? "XPathType"}
        eyebrow={props.viewModel?.eyebrow ?? "XPath type"}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
