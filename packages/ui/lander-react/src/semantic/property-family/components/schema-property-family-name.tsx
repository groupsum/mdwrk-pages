import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFamilyNameProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFamilyName({ value, description = "Family name. In the U.S., the last name of a Person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFamilyNameProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FamilyNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-family-name",
    shellClassName: "lander-semantic--schema-property-family-name",
    title: "familyName",
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
