import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLicenseProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLicense({ value, description = "A license document that applies to this content, typically indicated by URL.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLicenseProps) {
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
