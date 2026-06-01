import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEducationalUseProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEducationalUse({ value, description = "The purpose of a work in the context of education; for example, 'assignment', 'group work'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEducationalUseProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EducationalUsePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-educational-use",
    shellClassName: "lander-semantic--schema-property-educational-use",
    title: "educationalUse",
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
