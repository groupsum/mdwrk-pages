import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ItemConditionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemConditionProps extends ItemConditionPropertyInput, GeneratedPropertyUiProps<ItemConditionPropertyInput> {}

export function SchemaPropertyItemCondition({ value: legacyValue, description = "A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyItemConditionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ItemConditionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-item-condition",
    shellClassName: "lander-semantic--schema-property-item-condition",
    title: "itemCondition",
    value,
    description,
    examples,
    body,
    className,
    emitStructuredData,
    structuredDataOverrides,
    viewModel,
  });
}

(SchemaPropertyItemCondition as typeof SchemaPropertyItemCondition & { toStructuredData: (props: SchemaPropertyItemConditionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
