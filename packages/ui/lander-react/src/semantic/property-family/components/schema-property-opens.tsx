import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { OpensPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOpensProps extends OpensPropertyInput, GeneratedPropertyUiProps<OpensPropertyInput> {}

export function SchemaPropertyOpens({ value: legacyValue, description = "The opening hour of the place or service on the given day(s) of the week.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyOpensProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OpensPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-opens",
    shellClassName: "lander-semantic--schema-property-opens",
    title: "opens",
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

(SchemaPropertyOpens as typeof SchemaPropertyOpens & { toStructuredData: (props: SchemaPropertyOpensProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
