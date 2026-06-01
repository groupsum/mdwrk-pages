import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAddOnProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAddOn({ value, description = "An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAddOnProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AddOnPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-add-on",
    shellClassName: "lander-semantic--schema-property-add-on",
    title: "addOn",
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
