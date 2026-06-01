import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SoftwareAddOnPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySoftwareAddOnProps extends SoftwareAddOnPropertyInput, GeneratedPropertyUiProps<SoftwareAddOnPropertyInput> {}

export function SchemaPropertySoftwareAddOn({ value: legacyValue, description = "Additional content for a software application.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySoftwareAddOnProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SoftwareAddOnPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-software-add-on",
    shellClassName: "lander-semantic--schema-property-software-add-on",
    title: "softwareAddOn",
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
