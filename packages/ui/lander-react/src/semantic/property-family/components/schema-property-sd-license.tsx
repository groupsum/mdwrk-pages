import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySdLicenseProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySdLicense({ value, description = "A license document that applies to this structured data, typically indicated by URL.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySdLicenseProps) {
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
