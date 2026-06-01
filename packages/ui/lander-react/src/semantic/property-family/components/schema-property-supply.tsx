import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySupplyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySupply({ value, description = "A sub-property of instrument. A supply consumed when performing instructions or a direction.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySupplyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SupplyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-supply",
    shellClassName: "lander-semantic--schema-property-supply",
    title: "supply",
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
