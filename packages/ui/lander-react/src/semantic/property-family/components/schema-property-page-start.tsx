import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPageStartProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPageStart({ value, description = "The page on which the work starts; for example \"135\" or \"xiii\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPageStartProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PageStartPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-page-start",
    shellClassName: "lander-semantic--schema-property-page-start",
    title: "pageStart",
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
