import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyApplicationSuiteProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyApplicationSuite({ value, description = "The name of the application suite to which the application belongs (e.g. Excel belongs to Office).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyApplicationSuiteProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ApplicationSuitePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-application-suite",
    shellClassName: "lander-semantic--schema-property-application-suite",
    title: "applicationSuite",
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
