import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlternativeOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAlternativeOf({ value, description = "Another gene which is a variation of this one.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAlternativeOfProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlternativeOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-alternative-of",
    shellClassName: "lander-semantic--schema-property-alternative-of",
    title: "alternativeOf",
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
