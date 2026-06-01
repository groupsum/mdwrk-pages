import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AudiencePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAudienceProps extends AudiencePropertyInput, GeneratedPropertyUiProps<AudiencePropertyInput> {}

export function SchemaPropertyAudience({ value: legacyValue, description = "An intended audience, i.e. a group for whom something was created.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAudienceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AudiencePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-audience",
    shellClassName: "lander-semantic--schema-property-audience",
    title: "audience",
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
