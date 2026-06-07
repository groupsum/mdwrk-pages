import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AvailableAtOrFromPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailableAtOrFromProps extends AvailableAtOrFromPropertyInput, GeneratedPropertyUiProps<AvailableAtOrFromPropertyInput> {}

export function SchemaPropertyAvailableAtOrFrom({ value: legacyValue, description = "The place(s) from which the offer can be obtained (e.g. store locations).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAvailableAtOrFromProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AvailableAtOrFromPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-available-at-or-from",
    shellClassName: "lander-semantic--schema-property-available-at-or-from",
    title: "availableAtOrFrom",
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

(SchemaPropertyAvailableAtOrFrom as typeof SchemaPropertyAvailableAtOrFrom & { toStructuredData: (props: SchemaPropertyAvailableAtOrFromProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
