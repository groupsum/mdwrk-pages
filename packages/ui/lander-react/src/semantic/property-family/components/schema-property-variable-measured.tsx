import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVariableMeasuredProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyVariableMeasured({ value, description = "The variableMeasured property can indicate (repeated as necessary) the  variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue, or more explicitly as a [[StatisticalVariable]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyVariableMeasuredProps) {
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
