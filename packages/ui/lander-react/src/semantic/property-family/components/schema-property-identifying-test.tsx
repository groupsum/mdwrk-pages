import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IdentifyingTestPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIdentifyingTestProps extends IdentifyingTestPropertyInput, GeneratedPropertyUiProps<IdentifyingTestPropertyInput> {}

export function SchemaPropertyIdentifyingTest({ value: legacyValue, description = "A diagnostic test that can identify this sign.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIdentifyingTestProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IdentifyingTestPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-identifying-test",
    shellClassName: "lander-semantic--schema-property-identifying-test",
    title: "identifyingTest",
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
