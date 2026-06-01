import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySodiumContentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySodiumContent({ value, description = "The number of milligrams of sodium.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySodiumContentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SodiumContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sodium-content",
    shellClassName: "lander-semantic--schema-property-sodium-content",
    title: "sodiumContent",
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
