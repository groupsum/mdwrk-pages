import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDunsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDuns({ value, description = "The Dun & Bradstreet DUNS number for identifying an organization or business person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDunsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DunsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-duns",
    shellClassName: "lander-semantic--schema-property-duns",
    title: "duns",
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
