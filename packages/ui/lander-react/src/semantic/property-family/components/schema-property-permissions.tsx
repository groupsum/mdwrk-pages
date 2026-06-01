import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PermissionsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPermissionsProps extends PermissionsPropertyInput, GeneratedPropertyUiProps<PermissionsPropertyInput> {}

export function SchemaPropertyPermissions({ value: legacyValue, description = "Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPermissionsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PermissionsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-permissions",
    shellClassName: "lander-semantic--schema-property-permissions",
    title: "permissions",
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
