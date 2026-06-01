import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPermissionsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPermissions({ value, description = "Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPermissionsProps) {
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
