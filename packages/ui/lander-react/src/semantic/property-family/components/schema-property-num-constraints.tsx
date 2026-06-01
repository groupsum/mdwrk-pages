import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNumConstraintsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNumConstraints({ value, description = "Indicates the number of constraints property values defined for a particular [[ConstraintNode]] such as [[StatisticalVariable]]. This helps applications understand if they have access to a sufficiently complete description of a [[StatisticalVariable]] or other construct that is defined using properties on template-style nodes.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNumConstraintsProps) {
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
