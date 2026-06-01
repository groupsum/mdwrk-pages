import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasDriveThroughServiceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasDriveThroughService({ value, description = "Indicates whether some facility (e.g. [[FoodEstablishment]], [[CovidTestingFacility]]) offers a service that can be used by driving through in a car. In the case of [[CovidTestingFacility]] such facilities could potentially help with social distancing from other potentially-infected users.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasDriveThroughServiceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasDriveThroughServicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-drive-through-service",
    shellClassName: "lander-semantic--schema-property-has-drive-through-service",
    title: "hasDriveThroughService",
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
