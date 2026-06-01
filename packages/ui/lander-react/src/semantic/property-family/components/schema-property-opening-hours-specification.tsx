import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOpeningHoursSpecificationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyOpeningHoursSpecification({ value, description = "The opening hours of a certain place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyOpeningHoursSpecificationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OpeningHoursSpecificationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-opening-hours-specification",
    shellClassName: "lander-semantic--schema-property-opening-hours-specification",
    title: "openingHoursSpecification",
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
