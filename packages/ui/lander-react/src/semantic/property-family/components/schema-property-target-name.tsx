import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTargetNameProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTargetName({ value, description = "The name of a node in an established educational framework.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTargetNameProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TargetNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-target-name",
    shellClassName: "lander-semantic--schema-property-target-name",
    title: "targetName",
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
