import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEncodingsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEncodings({ value, description = "A media object that encodes this CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEncodingsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EncodingsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-encodings",
    shellClassName: "lander-semantic--schema-property-encodings",
    title: "encodings",
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
