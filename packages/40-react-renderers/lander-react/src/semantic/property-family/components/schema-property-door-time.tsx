import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DoorTimePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDoorTimeProps extends DoorTimePropertyInput, GeneratedPropertyUiProps<DoorTimePropertyInput> {}

export function SchemaPropertyDoorTime({ value: legacyValue, description = "The time admission will commence.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDoorTimeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DoorTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-door-time",
    shellClassName: "lander-semantic--schema-property-door-time",
    title: "doorTime",
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

(SchemaPropertyDoorTime as typeof SchemaPropertyDoorTime & { toStructuredData: (props: SchemaPropertyDoorTimeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
