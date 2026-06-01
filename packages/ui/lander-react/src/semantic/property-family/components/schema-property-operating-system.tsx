import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOperatingSystemProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyOperatingSystem({ value, description = "Operating systems supported (Windows 7, OS X 10.6, Android 1.6).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyOperatingSystemProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OperatingSystemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-operating-system",
    shellClassName: "lander-semantic--schema-property-operating-system",
    title: "operatingSystem",
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
