import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HoursAvailablePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHoursAvailableProps extends HoursAvailablePropertyInput, GeneratedPropertyUiProps<HoursAvailablePropertyInput> {}

export function SchemaPropertyHoursAvailable({ value: legacyValue, description = "The hours during which this service or contact is available.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHoursAvailableProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HoursAvailablePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-hours-available",
    shellClassName: "lander-semantic--schema-property-hours-available",
    title: "hoursAvailable",
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

(SchemaPropertyHoursAvailable as typeof SchemaPropertyHoursAvailable & { toStructuredData: (props: SchemaPropertyHoursAvailableProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
