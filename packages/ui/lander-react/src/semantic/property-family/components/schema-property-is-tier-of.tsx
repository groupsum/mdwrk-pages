import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsTierOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsTierOf({ value, description = "The member program this tier is a part of.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsTierOfProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsTierOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-tier-of",
    shellClassName: "lander-semantic--schema-property-is-tier-of",
    title: "isTierOf",
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
