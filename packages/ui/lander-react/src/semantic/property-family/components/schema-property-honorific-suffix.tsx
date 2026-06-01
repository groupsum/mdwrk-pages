import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHonorificSuffixProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHonorificSuffix({ value, description = "An honorific suffix following a Person's name such as M.D./PhD/MSCSW.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHonorificSuffixProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HonorificSuffixPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-honorific-suffix",
    shellClassName: "lander-semantic--schema-property-honorific-suffix",
    title: "honorificSuffix",
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
