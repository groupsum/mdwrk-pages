import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRxcuiProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRxcui({ value, description = "The RxCUI drug identifier from RXNORM.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRxcuiProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RxcuiPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-rxcui",
    shellClassName: "lander-semantic--schema-property-rxcui",
    title: "rxcui",
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
