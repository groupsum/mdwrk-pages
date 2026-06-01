import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyConstraintPropertyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyConstraintProperty({ value, description = "Indicates a property used as a constraint. For example, in the definition of a [[StatisticalVariable]]. The value is a property, either from within Schema.org or from other compatible (e.g. RDF) systems such as DataCommons.org or Wikidata.org. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyConstraintPropertyProps) {
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
