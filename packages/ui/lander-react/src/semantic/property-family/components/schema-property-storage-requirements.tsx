import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { StorageRequirementsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStorageRequirementsProps extends StorageRequirementsPropertyInput, GeneratedPropertyUiProps<StorageRequirementsPropertyInput> {}

export function SchemaPropertyStorageRequirements({ value: legacyValue, description = "Storage requirements (free space required).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyStorageRequirementsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StorageRequirementsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-storage-requirements",
    shellClassName: "lander-semantic--schema-property-storage-requirements",
    title: "storageRequirements",
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
