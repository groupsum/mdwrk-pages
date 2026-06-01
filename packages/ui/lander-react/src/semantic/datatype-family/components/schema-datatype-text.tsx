import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedDatatypeProps, renderGeneratedDatatypeCard } from "../shared.js";

export interface TextProps extends GeneratedDatatypeProps<string> {}

export function Text({ value, description = "Data type: Text.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: TextProps) {
  return renderGeneratedDatatypeCard({
    StructuredDataComponent: structuredDataReact.TextStructuredData,
    defaultEyebrow: "Datatype",
    kind: "schema-datatype-text",
    shellClassName: "lander-semantic--schema-datatype-text",
    title: "Text",
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
