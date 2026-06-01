import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySoftwareAddOnProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySoftwareAddOn({ value, description = "Additional content for a software application.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySoftwareAddOnProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SoftwareAddOnPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-software-add-on",
    shellClassName: "lander-semantic--schema-property-software-add-on",
    title: "softwareAddOn",
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
