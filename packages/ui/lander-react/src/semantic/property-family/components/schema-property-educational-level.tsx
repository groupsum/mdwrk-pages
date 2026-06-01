import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEducationalLevelProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEducationalLevel({ value, description = "The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEducationalLevelProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EducationalLevelPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-educational-level",
    shellClassName: "lander-semantic--schema-property-educational-level",
    title: "educationalLevel",
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
