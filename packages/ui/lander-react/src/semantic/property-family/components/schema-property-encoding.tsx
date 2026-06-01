import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEncodingProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEncoding({ value, description = "A media object that encodes this CreativeWork. This property is a synonym for associatedMedia.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEncodingProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EncodingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-encoding",
    shellClassName: "lander-semantic--schema-property-encoding",
    title: "encoding",
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
