import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBreadcrumbProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBreadcrumb({ value, description = "A set of links that can help a user understand and navigate a website hierarchy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBreadcrumbProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BreadcrumbPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-breadcrumb",
    shellClassName: "lander-semantic--schema-property-breadcrumb",
    title: "breadcrumb",
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
