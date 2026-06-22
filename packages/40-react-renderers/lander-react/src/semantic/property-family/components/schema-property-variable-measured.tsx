import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { VariableMeasuredPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVariableMeasuredProps extends VariableMeasuredPropertyInput, GeneratedPropertyUiProps<VariableMeasuredPropertyInput> {}

export function SchemaPropertyVariableMeasured({ value: legacyValue, description = "The variableMeasured property can indicate (repeated as necessary) the  variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue, or more explicitly as a [[StatisticalVariable]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyVariableMeasuredProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.VariableMeasuredPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-variable-measured",
    shellClassName: "lander-semantic--schema-property-variable-measured",
    title: "variableMeasured",
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

(SchemaPropertyVariableMeasured as typeof SchemaPropertyVariableMeasured & { toStructuredData: (props: SchemaPropertyVariableMeasuredProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
