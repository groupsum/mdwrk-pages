import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InstallUrlPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInstallUrlProps extends InstallUrlPropertyInput, GeneratedPropertyUiProps<InstallUrlPropertyInput> {}

export function SchemaPropertyInstallUrl({ value: legacyValue, description = "URL at which the app may be installed, if different from the URL of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInstallUrlProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyInstallUrl as typeof SchemaPropertyInstallUrl & { toStructuredData: (props: SchemaPropertyInstallUrlProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
