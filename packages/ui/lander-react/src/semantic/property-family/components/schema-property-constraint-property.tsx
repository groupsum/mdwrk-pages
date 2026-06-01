import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ConstraintPropertyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyConstraintPropertyProps extends ConstraintPropertyPropertyInput, GeneratedPropertyUiProps<ConstraintPropertyPropertyInput> {}

export function SchemaPropertyConstraintProperty({ value: legacyValue, description = "Indicates a property used as a constraint. For example, in the definition of a [[StatisticalVariable]]. The value is a property, either from within Schema.org or from other compatible (e.g. RDF) systems such as DataCommons.org or Wikidata.org. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyConstraintPropertyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ConstraintPropertyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-constraint-property",
    shellClassName: "lander-semantic--schema-property-constraint-property",
    title: "constraintProperty",
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
