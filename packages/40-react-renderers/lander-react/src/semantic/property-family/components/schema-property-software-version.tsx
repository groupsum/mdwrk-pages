import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SoftwareVersionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySoftwareVersionProps extends SoftwareVersionPropertyInput, GeneratedPropertyUiProps<SoftwareVersionPropertyInput> {}

export function SchemaPropertySoftwareVersion({ value: legacyValue, description = "Version of the software instance.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySoftwareVersionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SoftwareVersionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-software-version",
    shellClassName: "lander-semantic--schema-property-software-version",
    title: "softwareVersion",
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

(SchemaPropertySoftwareVersion as typeof SchemaPropertySoftwareVersion & { toStructuredData: (props: SchemaPropertySoftwareVersionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
