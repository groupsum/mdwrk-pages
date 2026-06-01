import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUrlTemplateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyUrlTemplate({ value, description = "An url template (RFC6570) that will be used to construct the target of the execution of the action.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyUrlTemplateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UrlTemplatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-url-template",
    shellClassName: "lander-semantic--schema-property-url-template",
    title: "urlTemplate",
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
