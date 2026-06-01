import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEducationalFrameworkProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEducationalFramework({ value, description = "The framework to which the resource being described is aligned.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEducationalFrameworkProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EducationalFrameworkPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-educational-framework",
    shellClassName: "lander-semantic--schema-property-educational-framework",
    title: "educationalFramework",
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
