import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContactPointsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContactPoints({ value, description = "A contact point for a person or organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContactPointsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContactPointsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contact-points",
    shellClassName: "lander-semantic--schema-property-contact-points",
    title: "contactPoints",
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
