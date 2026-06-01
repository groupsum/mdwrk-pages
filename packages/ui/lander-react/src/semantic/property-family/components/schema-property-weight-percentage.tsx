import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWeightPercentageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyWeightPercentage({ value, description = "Value representing the fraction of the weight that is used to compute the shipping price. Example: 0.10 and a shipping weight of 15kg would add $1.5 to the order price, where the $ is the currency of the order.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyWeightPercentageProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WeightPercentagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-weight-percentage",
    shellClassName: "lander-semantic--schema-property-weight-percentage",
    title: "weightPercentage",
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
