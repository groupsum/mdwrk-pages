import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyValidForProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyValidFor({ value, description = "The duration of validity of a permit or similar thing.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyValidForProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ValidForPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-valid-for",
    shellClassName: "lander-semantic--schema-property-valid-for",
    title: "validFor",
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
