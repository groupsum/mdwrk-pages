import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyClaimInterpreterProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyClaimInterpreter({ value, description = "For a [[Claim]] interpreted from [[MediaObject]] content, the [[interpretedAsClaim]] property can be used to indicate a claim contained, implied or refined from the content of a [[MediaObject]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyClaimInterpreterProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ClaimInterpreterPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-claim-interpreter",
    shellClassName: "lander-semantic--schema-property-claim-interpreter",
    title: "claimInterpreter",
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
