import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TypicalTestPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTypicalTestProps extends TypicalTestPropertyInput, GeneratedPropertyUiProps<TypicalTestPropertyInput> {}

export function SchemaPropertyTypicalTest({ value: legacyValue, description = "A medical test typically performed given this condition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTypicalTestProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TypicalTestPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-typical-test",
    shellClassName: "lander-semantic--schema-property-typical-test",
    title: "typicalTest",
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
