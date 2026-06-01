import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsrcCodeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsrcCode({ value, description = "The International Standard Recording Code for the recording.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsrcCodeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsrcCodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-isrc-code",
    shellClassName: "lander-semantic--schema-property-isrc-code",
    title: "isrcCode",
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
