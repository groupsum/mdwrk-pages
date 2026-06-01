import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDuplicateTherapyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDuplicateTherapy({ value, description = "A therapy that duplicates or overlaps this one.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDuplicateTherapyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DuplicateTherapyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-duplicate-therapy",
    shellClassName: "lander-semantic--schema-property-duplicate-therapy",
    title: "duplicateTherapy",
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
