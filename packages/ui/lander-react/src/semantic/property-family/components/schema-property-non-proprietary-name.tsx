import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNonProprietaryNameProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNonProprietaryName({ value, description = "The generic name of this drug or supplement.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNonProprietaryNameProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NonProprietaryNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-non-proprietary-name",
    shellClassName: "lander-semantic--schema-property-non-proprietary-name",
    title: "nonProprietaryName",
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
