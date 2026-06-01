import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWorksForProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyWorksFor({ value, description = "Organizations that the person works for.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyWorksForProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WorksForPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-works-for",
    shellClassName: "lander-semantic--schema-property-works-for",
    title: "worksFor",
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
