import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFoundersProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFounders({ value, description = "A person who founded this organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFoundersProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FoundersPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-founders",
    shellClassName: "lander-semantic--schema-property-founders",
    title: "founders",
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
