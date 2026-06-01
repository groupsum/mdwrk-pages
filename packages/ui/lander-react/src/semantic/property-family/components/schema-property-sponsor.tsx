import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SponsorPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySponsorProps extends SponsorPropertyInput, GeneratedPropertyUiProps<SponsorPropertyInput> {}

export function SchemaPropertySponsor({ value: legacyValue, description = "A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySponsorProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SponsorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sponsor",
    shellClassName: "lander-semantic--schema-property-sponsor",
    title: "sponsor",
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
