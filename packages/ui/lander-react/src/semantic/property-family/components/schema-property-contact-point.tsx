import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContactPointProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContactPoint({ value, description = "A contact point for a person or organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContactPointProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContactPointPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contact-point",
    shellClassName: "lander-semantic--schema-property-contact-point",
    title: "contactPoint",
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
