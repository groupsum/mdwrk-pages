import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MentionsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMentionsProps extends MentionsPropertyInput, GeneratedPropertyUiProps<MentionsPropertyInput> {}

export function SchemaPropertyMentions({ value: legacyValue, description = "Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMentionsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MentionsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-mentions",
    shellClassName: "lander-semantic--schema-property-mentions",
    title: "mentions",
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
