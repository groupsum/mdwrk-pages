import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EmailPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEmailProps extends EmailPropertyInput, GeneratedPropertyUiProps<EmailPropertyInput> {}

export function SchemaPropertyEmail({ value: legacyValue, description = "Email address.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEmailProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EmailPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-email",
    shellClassName: "lander-semantic--schema-property-email",
    title: "email",
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

(SchemaPropertyEmail as typeof SchemaPropertyEmail & { toStructuredData: (props: SchemaPropertyEmailProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
