import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAwardProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAward({ value, description = "An award won by or for this item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAwardProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AwardPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-award",
    shellClassName: "lander-semantic--schema-property-award",
    title: "award",
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
