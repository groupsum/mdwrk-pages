import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContactOptionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContactOption({ value, description = "An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContactOptionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContactOptionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contact-option",
    shellClassName: "lander-semantic--schema-property-contact-option",
    title: "contactOption",
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
