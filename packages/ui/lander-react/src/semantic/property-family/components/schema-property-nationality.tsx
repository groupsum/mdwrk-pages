import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNationalityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNationality({ value, description = "Nationality of the person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNationalityProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NationalityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-nationality",
    shellClassName: "lander-semantic--schema-property-nationality",
    title: "nationality",
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
