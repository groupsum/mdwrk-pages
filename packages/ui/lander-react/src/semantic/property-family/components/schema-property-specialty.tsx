import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySpecialtyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySpecialty({ value, description = "One of the domain specialities to which this web page's content applies.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySpecialtyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SpecialtyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-specialty",
    shellClassName: "lander-semantic--schema-property-specialty",
    title: "specialty",
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
