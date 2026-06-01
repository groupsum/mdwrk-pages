import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ClaimInterpreterPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyClaimInterpreterProps extends ClaimInterpreterPropertyInput, GeneratedPropertyUiProps<ClaimInterpreterPropertyInput> {}

export function SchemaPropertyClaimInterpreter({ value: legacyValue, description = "For a [[Claim]] interpreted from [[MediaObject]] content, the [[interpretedAsClaim]] property can be used to indicate a claim contained, implied or refined from the content of a [[MediaObject]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyClaimInterpreterProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
