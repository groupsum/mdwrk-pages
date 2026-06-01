import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGracePeriodProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGracePeriod({ value, description = "The period of time after any due date that the borrower has to fulfil its obligations before a default (failure to pay) is deemed to have occurred.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGracePeriodProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GracePeriodPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-grace-period",
    shellClassName: "lander-semantic--schema-property-grace-period",
    title: "gracePeriod",
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
