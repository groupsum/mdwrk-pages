import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LicensePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLicenseProps extends LicensePropertyInput, GeneratedPropertyUiProps<LicensePropertyInput> {}

export function SchemaPropertyLicense({ value: legacyValue, description = "A license document that applies to this content, typically indicated by URL.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLicenseProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LicensePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-license",
    shellClassName: "lander-semantic--schema-property-license",
    title: "license",
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

(SchemaPropertyLicense as typeof SchemaPropertyLicense & { toStructuredData: (props: SchemaPropertyLicenseProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
