import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SdLicensePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySdLicenseProps extends SdLicensePropertyInput, GeneratedPropertyUiProps<SdLicensePropertyInput> {}

export function SchemaPropertySdLicense({ value: legacyValue, description = "A license document that applies to this structured data, typically indicated by URL.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySdLicenseProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SdLicensePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sd-license",
    shellClassName: "lander-semantic--schema-property-sd-license",
    title: "sdLicense",
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

(SchemaPropertySdLicense as typeof SchemaPropertySdLicense & { toStructuredData: (props: SchemaPropertySdLicenseProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
