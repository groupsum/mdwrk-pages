import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyValidInProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyValidIn({ value, description = "The geographic area where the item is valid. Applies for example to a [[Permit]], a [[Certification]], or an [[EducationalOccupationalCredential]]. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyValidInProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ValidInPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-valid-in",
    shellClassName: "lander-semantic--schema-property-valid-in",
    title: "validIn",
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
