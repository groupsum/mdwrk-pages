import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStorageRequirementsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyStorageRequirements({ value, description = "Storage requirements (free space required).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStorageRequirementsProps) {
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
