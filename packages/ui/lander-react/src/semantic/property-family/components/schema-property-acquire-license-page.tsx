import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AcquireLicensePagePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAcquireLicensePageProps extends AcquireLicensePagePropertyInput, GeneratedPropertyUiProps<AcquireLicensePagePropertyInput> {}

export function SchemaPropertyAcquireLicensePage({ value: legacyValue, description = "Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAcquireLicensePageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AcquireLicensePagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-acquire-license-page",
    shellClassName: "lander-semantic--schema-property-acquire-license-page",
    title: "acquireLicensePage",
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
