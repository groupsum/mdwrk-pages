import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAcquireLicensePageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAcquireLicensePage({ value, description = "Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAcquireLicensePageProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AcquireLicensePagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-acquire-license-page",
    shellClassName: "lander-semantic--schema-property-acquire-license-page",
    title: "acquireLicensePage",
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
