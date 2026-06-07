import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { YieldPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyYieldProps extends YieldPropertyInput, GeneratedPropertyUiProps<YieldPropertyInput> {}

export function SchemaPropertyYield({ value: legacyValue, description = "The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyYieldProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyYield as typeof SchemaPropertyYield & { toStructuredData: (props: SchemaPropertyYieldProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
