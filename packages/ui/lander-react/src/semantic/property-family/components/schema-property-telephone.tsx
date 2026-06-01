import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTelephoneProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTelephone({ value, description = "The telephone number.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTelephoneProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TelephonePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-telephone",
    shellClassName: "lander-semantic--schema-property-telephone",
    title: "telephone",
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
