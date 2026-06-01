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

export interface StructuredValueProps {
  name: string;
  description?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<StructuredValueStructuredDataInput>;
}

export function StructuredValue(props: StructuredValueProps) {
  const base: StructuredValueStructuredDataInput = {
    name: props.name,
    description: props.description,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.StructuredValueStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="structured-value"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Structured value"}
        description={props.description}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface TypeAndQuantityNodeProps {
  name: string;
  description?: string;
  amountOfThisGood?: number | string;
  businessFunction?: string;
  typeOfGood?: string;
  unitCode?: string;
  unitText?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<TypeAndQuantityNodeStructuredDataInput>;
}

export function TypeAndQuantityNode(props: TypeAndQuantityNodeProps) {
  const base: TypeAndQuantityNodeStructuredDataInput = {
    name: props.name,
    description: props.description,
    amountOfThisGood: props.amountOfThisGood,
    typeOfGood: ref("Product", props.typeOfGood),
    unitCode: props.unitCode,
    unitText: props.unitText,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.TypeAndQuantityNodeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="type-and-quantity-node"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Type and quantity node"}
        description={props.description}
        meta={[
          props.amountOfThisGood !== undefined ? { label: "Amount", value: String(props.amountOfThisGood) } : null,
          props.unitCode ? { label: "Unit code", value: props.unitCode } : null,
          props.unitText ? { label: "Unit text", value: props.unitText } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.typeOfGood ? <p>{props.typeOfGood}</p> : null}
            {props.businessFunction ? <p>{props.businessFunction}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface UnitPriceSpecificationProps {
  name: string;
  description?: string;
  price?: number | string;
  priceCurrency?: string;
  unitCode?: string;
  unitText?: string;
  billingDuration?: number | string;
  referenceQuantity?: number | string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<UnitPriceSpecificationStructuredDataInput>;
}

export function UnitPriceSpecification(props: UnitPriceSpecificationProps) {
  const base: UnitPriceSpecificationStructuredDataInput = {
    name: props.name,
    description: props.description,
    price: props.price,
    priceCurrency: props.priceCurrency,
    unitCode: props.unitCode,
    unitText: props.unitText,
    billingDuration: props.billingDuration,
    referenceQuantity: props.referenceQuantity,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.UnitPriceSpecificationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="unit-price-specification"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Unit price specification"}
        description={props.description}
        meta={[
          props.price !== undefined ? { label: "Price", value: String(props.price) } : null,
          props.priceCurrency ? { label: "Currency", value: props.priceCurrency } : null,
          props.unitCode ? { label: "Unit code", value: props.unitCode } : null,
          props.unitText ? { label: "Unit text", value: props.unitText } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.billingDuration !== undefined ? <p>Billing duration: {String(props.billingDuration)}</p> : null}
            {props.referenceQuantity !== undefined ? <p>Reference quantity: {String(props.referenceQuantity)}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
