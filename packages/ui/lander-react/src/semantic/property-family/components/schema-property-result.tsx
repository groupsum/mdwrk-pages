import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ResultPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyResultProps extends ResultPropertyInput, GeneratedPropertyUiProps<ResultPropertyInput> {}

export function SchemaPropertyResult({ value: legacyValue, description = "The result produced in the action. E.g. John wrote *a book*.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyResultProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ResultPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-result",
    shellClassName: "lander-semantic--schema-property-result",
    title: "result",
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

(SchemaPropertyResult as typeof SchemaPropertyResult & { toStructuredData: (props: SchemaPropertyResultProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
