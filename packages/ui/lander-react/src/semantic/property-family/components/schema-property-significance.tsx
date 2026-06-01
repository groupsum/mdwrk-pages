import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySignificanceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySignificance({ value, description = "The significance associated with the superficial anatomy; as an example, how characteristics of the superficial anatomy can suggest underlying medical conditions or courses of treatment.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySignificanceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SignificancePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-significance",
    shellClassName: "lander-semantic--schema-property-significance",
    title: "significance",
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
