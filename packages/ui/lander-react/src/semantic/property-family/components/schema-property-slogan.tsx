import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySloganProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySlogan({ value, description = "A slogan or motto associated with the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySloganProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SloganPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-slogan",
    shellClassName: "lander-semantic--schema-property-slogan",
    title: "slogan",
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
