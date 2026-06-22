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

export interface ListItemProps {
  name: string;
  description?: string;
  item?: string;
  position?: number | string;
  previousItem?: string;
  nextItem?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ListItemStructuredDataInput>;
}

export function ListItem(props: ListItemProps) {
  const base: ListItemStructuredDataInput = {
    name: props.name,
    description: props.description,
    item: ref("Thing", props.item),
    position: props.position,
    previousItem: ref("ListItem", props.previousItem),
    nextItem: ref("ListItem", props.nextItem),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ListItemStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="list-item"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "List item"}
        description={props.description}
        meta={[
          props.position !== undefined ? { label: "Position", value: String(props.position) } : null,
          props.item ? { label: "Item", value: props.item } : null,
          props.previousItem ? { label: "Previous", value: props.previousItem } : null,
          props.nextItem ? { label: "Next", value: props.nextItem } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface NutritionInformationProps {
  name: string;
  description?: string;
  servingSize?: string;
  calories?: string;
  carbohydrateContent?: string;
  proteinContent?: string;
  fatContent?: string;
  sugarContent?: string;
  sodiumContent?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<NutritionInformationStructuredDataInput>;
}

export function NutritionInformation(props: NutritionInformationProps) {
  const base: NutritionInformationStructuredDataInput = {
    name: props.name,
    description: props.description,
    servingSize: props.servingSize,
    calories: props.calories,
    carbohydrateContent: props.carbohydrateContent,
    proteinContent: props.proteinContent,
    fatContent: props.fatContent,
    sugarContent: props.sugarContent,
    sodiumContent: props.sodiumContent,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.NutritionInformationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="nutrition-information"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Nutrition information"}
        description={props.description}
        meta={[
          props.servingSize ? { label: "Serving size", value: props.servingSize } : null,
          props.calories ? { label: "Calories", value: props.calories } : null,
          props.carbohydrateContent ? { label: "Carbs", value: props.carbohydrateContent } : null,
          props.proteinContent ? { label: "Protein", value: props.proteinContent } : null,
          props.fatContent ? { label: "Fat", value: props.fatContent } : null,
          props.sugarContent ? { label: "Sugar", value: props.sugarContent } : null,
          props.sodiumContent ? { label: "Sodium", value: props.sodiumContent } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface PropertyProps {
  name: string;
  description?: string;
  domainIncludes?: string[];
  rangeIncludes?: string[];
  inverseOf?: string;
  supersededBy?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<PropertyStructuredDataInput>;
}

export function Property(props: PropertyProps) {
  const base: PropertyStructuredDataInput = {
    name: props.name,
    description: props.description,
    domainIncludes: props.domainIncludes?.map((entry) => ref("Class", entry)),
    inverseOf: ref("Property", props.inverseOf),
    rangeIncludes: props.rangeIncludes?.map((entry) => ref("Class", entry)),
    supersededBy: ref("Property", props.supersededBy),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.PropertyStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="property"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Property"}
        description={props.description}
        meta={[
          props.inverseOf ? { label: "Inverse of", value: props.inverseOf } : null,
          props.supersededBy ? { label: "Superseded by", value: props.supersededBy } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.domainIncludes?.length ? <div className="lander-semantic__property-domain">{bodyList(props.domainIncludes)}</div> : null}
            {props.rangeIncludes?.length ? <div className="lander-semantic__property-range">{bodyList(props.rangeIncludes)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
