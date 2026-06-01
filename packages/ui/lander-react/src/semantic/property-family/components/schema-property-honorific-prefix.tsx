import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHonorificPrefixProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHonorificPrefix({ value, description = "An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHonorificPrefixProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HonorificPrefixPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-honorific-prefix",
    shellClassName: "lander-semantic--schema-property-honorific-prefix",
    title: "honorificPrefix",
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
