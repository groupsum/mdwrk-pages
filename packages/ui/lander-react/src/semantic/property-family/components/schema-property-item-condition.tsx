import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemConditionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyItemCondition({ value, description = "A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyItemConditionProps) {
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
