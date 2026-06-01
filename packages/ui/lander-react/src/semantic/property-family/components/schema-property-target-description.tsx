import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTargetDescriptionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTargetDescription({ value, description = "The description of a node in an established educational framework.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTargetDescriptionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TargetDescriptionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-target-description",
    shellClassName: "lander-semantic--schema-property-target-description",
    title: "targetDescription",
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
