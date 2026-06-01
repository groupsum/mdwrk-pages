import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReturnLabelSourceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReturnLabelSource({ value, description = "The method (from an enumeration) by which the customer obtains a return shipping label for a product returned for any reason.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReturnLabelSourceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReturnLabelSourcePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-return-label-source",
    shellClassName: "lander-semantic--schema-property-return-label-source",
    title: "returnLabelSource",
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
