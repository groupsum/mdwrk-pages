import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TotalTimePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTotalTimeProps extends TotalTimePropertyInput, GeneratedPropertyUiProps<TotalTimePropertyInput> {}

export function SchemaPropertyTotalTime({ value: legacyValue, description = "The total time required to perform instructions or a direction (including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTotalTimeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TotalTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-total-time",
    shellClassName: "lander-semantic--schema-property-total-time",
    title: "totalTime",
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

(SchemaPropertyTotalTime as typeof SchemaPropertyTotalTime & { toStructuredData: (props: SchemaPropertyTotalTimeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
