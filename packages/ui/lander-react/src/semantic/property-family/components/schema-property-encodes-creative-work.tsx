import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEncodesCreativeWorkProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEncodesCreativeWork({ value, description = "The CreativeWork encoded by this media object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEncodesCreativeWorkProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EncodesCreativeWorkPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-encodes-creative-work",
    shellClassName: "lander-semantic--schema-property-encodes-creative-work",
    title: "encodesCreativeWork",
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
