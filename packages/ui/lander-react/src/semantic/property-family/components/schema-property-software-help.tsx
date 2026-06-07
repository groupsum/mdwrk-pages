import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SoftwareHelpPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySoftwareHelpProps extends SoftwareHelpPropertyInput, GeneratedPropertyUiProps<SoftwareHelpPropertyInput> {}

export function SchemaPropertySoftwareHelp({ value: legacyValue, description = "Software application help.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySoftwareHelpProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SoftwareHelpPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-software-help",
    shellClassName: "lander-semantic--schema-property-software-help",
    title: "softwareHelp",
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

(SchemaPropertySoftwareHelp as typeof SchemaPropertySoftwareHelp & { toStructuredData: (props: SchemaPropertySoftwareHelpProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
