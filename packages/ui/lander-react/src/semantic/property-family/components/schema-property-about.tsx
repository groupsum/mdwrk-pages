import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAboutProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAbout({ value, description = "The subject matter of an object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAboutProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AboutPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-about",
    shellClassName: "lander-semantic--schema-property-about",
    title: "about",
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
