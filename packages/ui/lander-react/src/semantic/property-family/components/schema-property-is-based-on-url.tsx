import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsBasedOnUrlProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsBasedOnUrl({ value, description = "A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsBasedOnUrlProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsBasedOnUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-based-on-url",
    shellClassName: "lander-semantic--schema-property-is-based-on-url",
    title: "isBasedOnUrl",
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
