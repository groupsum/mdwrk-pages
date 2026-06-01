import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEncodingTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEncodingType({ value, description = "The supported encoding type(s) for an EntryPoint request.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEncodingTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EncodingTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-encoding-type",
    shellClassName: "lander-semantic--schema-property-encoding-type",
    title: "encodingType",
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
