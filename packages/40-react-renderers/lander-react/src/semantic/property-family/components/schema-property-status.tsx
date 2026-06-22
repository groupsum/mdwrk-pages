import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { StatusPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStatusProps extends StatusPropertyInput, GeneratedPropertyUiProps<StatusPropertyInput> {}

export function SchemaPropertyStatus({ value: legacyValue, description = "The status of the study (enumerated).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyStatusProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StatusPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-status",
    shellClassName: "lander-semantic--schema-property-status",
    title: "status",
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

(SchemaPropertyStatus as typeof SchemaPropertyStatus & { toStructuredData: (props: SchemaPropertyStatusProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
