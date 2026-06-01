import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBusinessDaysProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBusinessDays({ value, description = "Days of the week when the merchant typically operates, indicated via opening hours markup.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBusinessDaysProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BusinessDaysPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-business-days",
    shellClassName: "lander-semantic--schema-property-business-days",
    title: "businessDays",
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
