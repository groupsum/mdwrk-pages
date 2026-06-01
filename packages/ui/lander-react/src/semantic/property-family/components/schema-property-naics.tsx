import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNaicsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNaics({ value, description = "The North American Industry Classification System (NAICS) code for a particular organization or business person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNaicsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NaicsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-naics",
    shellClassName: "lander-semantic--schema-property-naics",
    title: "naics",
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
