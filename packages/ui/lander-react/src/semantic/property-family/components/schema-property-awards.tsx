import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAwardsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAwards({ value, description = "Awards won by or for this item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAwardsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AwardsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-awards",
    shellClassName: "lander-semantic--schema-property-awards",
    title: "awards",
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
