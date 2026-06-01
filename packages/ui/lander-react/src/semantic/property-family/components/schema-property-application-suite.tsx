import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ApplicationSuitePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyApplicationSuiteProps extends ApplicationSuitePropertyInput, GeneratedPropertyUiProps<ApplicationSuitePropertyInput> {}

export function SchemaPropertyApplicationSuite({ value: legacyValue, description = "The name of the application suite to which the application belongs (e.g. Excel belongs to Office).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyApplicationSuiteProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
