import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ExpressedInPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExpressedInProps extends ExpressedInPropertyInput, GeneratedPropertyUiProps<ExpressedInPropertyInput> {}

export function SchemaPropertyExpressedIn({ value: legacyValue, description = "Tissue, organ, biological sample, etc in which activity of this gene has been observed experimentally. For example brain, digestive system.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyExpressedInProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ExpressedInPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-expressed-in",
    shellClassName: "lander-semantic--schema-property-expressed-in",
    title: "expressedIn",
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
