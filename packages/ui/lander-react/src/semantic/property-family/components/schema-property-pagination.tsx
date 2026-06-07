import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PaginationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPaginationProps extends PaginationPropertyInput, GeneratedPropertyUiProps<PaginationPropertyInput> {}

export function SchemaPropertyPagination({ value: legacyValue, description = "Any description of pages that is not separated into pageStart and pageEnd; for example, \"1-6, 9, 55\" or \"10-12, 46-49\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPaginationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PaginationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-pagination",
    shellClassName: "lander-semantic--schema-property-pagination",
    title: "pagination",
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

(SchemaPropertyPagination as typeof SchemaPropertyPagination & { toStructuredData: (props: SchemaPropertyPaginationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
