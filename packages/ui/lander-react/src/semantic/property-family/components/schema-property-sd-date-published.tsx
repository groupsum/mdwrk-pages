import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySdDatePublishedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySdDatePublished({ value, description = "Indicates the date on which the current structured data was generated / published. Typically used alongside [[sdPublisher]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySdDatePublishedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SdDatePublishedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sd-date-published",
    shellClassName: "lander-semantic--schema-property-sd-date-published",
    title: "sdDatePublished",
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
