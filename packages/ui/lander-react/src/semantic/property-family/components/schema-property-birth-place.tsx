import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBirthPlaceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBirthPlace({ value, description = "The place where the person was born.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBirthPlaceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BirthPlacePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-birth-place",
    shellClassName: "lander-semantic--schema-property-birth-place",
    title: "birthPlace",
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
