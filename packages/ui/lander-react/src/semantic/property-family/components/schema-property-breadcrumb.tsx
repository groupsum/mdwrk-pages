import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BreadcrumbPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBreadcrumbProps extends BreadcrumbPropertyInput, GeneratedPropertyUiProps<BreadcrumbPropertyInput> {}

export function SchemaPropertyBreadcrumb({ value: legacyValue, description = "A set of links that can help a user understand and navigate a website hierarchy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBreadcrumbProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyBreadcrumb as typeof SchemaPropertyBreadcrumb & { toStructuredData: (props: SchemaPropertyBreadcrumbProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
