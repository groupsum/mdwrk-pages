import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InterpretedAsClaimPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInterpretedAsClaimProps extends InterpretedAsClaimPropertyInput, GeneratedPropertyUiProps<InterpretedAsClaimPropertyInput> {}

export function SchemaPropertyInterpretedAsClaim({ value: legacyValue, description = "Used to indicate a specific claim contained, implied, translated or refined from the content of a [[MediaObject]] or other [[CreativeWork]]. The interpreting party can be indicated using [[claimInterpreter]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInterpretedAsClaimProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyInterpretedAsClaim as typeof SchemaPropertyInterpretedAsClaim & { toStructuredData: (props: SchemaPropertyInterpretedAsClaimProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
