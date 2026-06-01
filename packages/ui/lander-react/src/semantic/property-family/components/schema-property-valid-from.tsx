import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyValidFromProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyValidFrom({ value, description = "The date when the item becomes valid.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyValidFromProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ValidFromPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-valid-from",
    shellClassName: "lander-semantic--schema-property-valid-from",
    title: "validFrom",
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
