import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NumConstraintsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNumConstraintsProps extends NumConstraintsPropertyInput, GeneratedPropertyUiProps<NumConstraintsPropertyInput> {}

export function SchemaPropertyNumConstraints({ value: legacyValue, description = "Indicates the number of constraints property values defined for a particular [[ConstraintNode]] such as [[StatisticalVariable]]. This helps applications understand if they have access to a sufficiently complete description of a [[StatisticalVariable]] or other construct that is defined using properties on template-style nodes.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNumConstraintsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NumConstraintsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-num-constraints",
    shellClassName: "lander-semantic--schema-property-num-constraints",
    title: "numConstraints",
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

(SchemaPropertyNumConstraints as typeof SchemaPropertyNumConstraints & { toStructuredData: (props: SchemaPropertyNumConstraintsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
