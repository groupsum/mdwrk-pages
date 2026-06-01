import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyColleaguesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyColleagues({ value, description = "A colleague of the person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyColleaguesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ColleaguesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-colleagues",
    shellClassName: "lander-semantic--schema-property-colleagues",
    title: "colleagues",
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
