import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVideoProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyVideo({ value, description = "An embedded video object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyVideoProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.VideoPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-video",
    shellClassName: "lander-semantic--schema-property-video",
    title: "video",
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
