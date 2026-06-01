import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEducationalAlignmentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEducationalAlignment({ value, description = "An alignment to an established educational framework.\n\nThis property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEducationalAlignmentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EducationalAlignmentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-educational-alignment",
    shellClassName: "lander-semantic--schema-property-educational-alignment",
    title: "educationalAlignment",
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
