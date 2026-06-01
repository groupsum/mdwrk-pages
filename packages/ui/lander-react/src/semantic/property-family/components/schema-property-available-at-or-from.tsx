import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailableAtOrFromProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAvailableAtOrFrom({ value, description = "The place(s) from which the offer can be obtained (e.g. store locations).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAvailableAtOrFromProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AvailableAtOrFromPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-available-at-or-from",
    shellClassName: "lander-semantic--schema-property-available-at-or-from",
    title: "availableAtOrFrom",
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
