import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPaginationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPagination({ value, description = "Any description of pages that is not separated into pageStart and pageEnd; for example, \"1-6, 9, 55\" or \"10-12, 46-49\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPaginationProps) {
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
