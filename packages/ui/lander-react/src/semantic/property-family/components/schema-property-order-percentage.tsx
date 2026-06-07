import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { OrderPercentagePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOrderPercentageProps extends OrderPercentagePropertyInput, GeneratedPropertyUiProps<OrderPercentagePropertyInput> {}

export function SchemaPropertyOrderPercentage({ value: legacyValue, description = "Value representing the fraction of the value of the order that is charged as shipping cost. Example: 0.10 would mean shipping rate is 10% of the total order value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyOrderPercentageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OrderPercentagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-order-percentage",
    shellClassName: "lander-semantic--schema-property-order-percentage",
    title: "orderPercentage",
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

(SchemaPropertyOrderPercentage as typeof SchemaPropertyOrderPercentage & { toStructuredData: (props: SchemaPropertyOrderPercentageProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
