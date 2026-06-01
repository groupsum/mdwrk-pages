import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPotentialActionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPotentialAction({ value, description = "Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPotentialActionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PotentialActionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-potential-action",
    shellClassName: "lander-semantic--schema-property-potential-action",
    title: "potentialAction",
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
