import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPageEndProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPageEnd({ value, description = "The page on which the work ends; for example \"138\" or \"xvi\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPageEndProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PageEndPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-page-end",
    shellClassName: "lander-semantic--schema-property-page-end",
    title: "pageEnd",
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
