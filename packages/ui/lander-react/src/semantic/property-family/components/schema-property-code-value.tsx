import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CodeValuePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCodeValueProps extends CodeValuePropertyInput, GeneratedPropertyUiProps<CodeValuePropertyInput> {}

export function SchemaPropertyCodeValue({ value: legacyValue, description = "A short textual code that uniquely identifies the value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCodeValueProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CodeValuePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-code-value",
    shellClassName: "lander-semantic--schema-property-code-value",
    title: "codeValue",
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

(SchemaPropertyCodeValue as typeof SchemaPropertyCodeValue & { toStructuredData: (props: SchemaPropertyCodeValueProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
