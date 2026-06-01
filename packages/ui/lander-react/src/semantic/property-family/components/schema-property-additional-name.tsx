import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAdditionalNameProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAdditionalName({ value, description = "An additional name for a Person, can be used for a middle name.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAdditionalNameProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AdditionalNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-additional-name",
    shellClassName: "lander-semantic--schema-property-additional-name",
    title: "additionalName",
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
