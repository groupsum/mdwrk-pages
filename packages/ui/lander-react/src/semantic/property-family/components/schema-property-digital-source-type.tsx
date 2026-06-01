import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDigitalSourceTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDigitalSourceType({ value, description = "Indicates an IPTCDigitalSourceEnumeration code indicating the nature of the digital source(s) for some [[CreativeWork]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDigitalSourceTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DigitalSourceTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-digital-source-type",
    shellClassName: "lander-semantic--schema-property-digital-source-type",
    title: "digitalSourceType",
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
