import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyYieldProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyYield({ value, description = "The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyYieldProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.YieldPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-yield",
    shellClassName: "lander-semantic--schema-property-yield",
    title: "yield",
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
