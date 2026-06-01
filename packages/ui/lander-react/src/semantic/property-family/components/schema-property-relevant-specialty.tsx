import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelevantSpecialtyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRelevantSpecialty({ value, description = "If applicable, a medical specialty in which this entity is relevant.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRelevantSpecialtyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RelevantSpecialtyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-relevant-specialty",
    shellClassName: "lander-semantic--schema-property-relevant-specialty",
    title: "relevantSpecialty",
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
