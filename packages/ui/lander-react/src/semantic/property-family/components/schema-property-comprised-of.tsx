import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyComprisedOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyComprisedOf({ value, description = "Specifying something physically contained by something else. Typically used here for the underlying anatomical structures, such as organs, that comprise the anatomical system.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyComprisedOfProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ComprisedOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-comprised-of",
    shellClassName: "lander-semantic--schema-property-comprised-of",
    title: "comprisedOf",
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
