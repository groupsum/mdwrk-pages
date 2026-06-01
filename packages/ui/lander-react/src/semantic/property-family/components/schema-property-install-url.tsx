import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInstallUrlProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInstallUrl({ value, description = "URL at which the app may be installed, if different from the URL of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInstallUrlProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InstallUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-install-url",
    shellClassName: "lander-semantic--schema-property-install-url",
    title: "installUrl",
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
