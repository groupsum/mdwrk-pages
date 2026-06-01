import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLogoProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLogo({ value, description = "An associated logo.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLogoProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LogoPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-logo",
    shellClassName: "lander-semantic--schema-property-logo",
    title: "logo",
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
