import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyClosesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCloses({ value, description = "The closing hour of the place or service on the given day(s) of the week.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyClosesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ClosesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-closes",
    shellClassName: "lander-semantic--schema-property-closes",
    title: "closes",
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
