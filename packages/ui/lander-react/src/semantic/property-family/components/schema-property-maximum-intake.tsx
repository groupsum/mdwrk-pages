import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaximumIntakeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMaximumIntake({ value, description = "Recommended intake of this supplement for a given population as defined by a specific recommending authority.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMaximumIntakeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MaximumIntakePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-maximum-intake",
    shellClassName: "lander-semantic--schema-property-maximum-intake",
    title: "maximumIntake",
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
