import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBirthDateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBirthDate({ value, description = "Date of birth.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBirthDateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BirthDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-birth-date",
    shellClassName: "lander-semantic--schema-property-birth-date",
    title: "birthDate",
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
