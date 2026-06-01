import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInterpretedAsClaimProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInterpretedAsClaim({ value, description = "Used to indicate a specific claim contained, implied, translated or refined from the content of a [[MediaObject]] or other [[CreativeWork]]. The interpreting party can be indicated using [[claimInterpreter]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInterpretedAsClaimProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InterpretedAsClaimPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-interpreted-as-claim",
    shellClassName: "lander-semantic--schema-property-interpreted-as-claim",
    title: "interpretedAsClaim",
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
