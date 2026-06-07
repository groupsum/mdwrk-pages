import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LocationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLocationProps extends LocationPropertyInput, GeneratedPropertyUiProps<LocationPropertyInput> {}

export function SchemaPropertyLocation({ value: legacyValue, description = "The location of, for example, where an event is happening, where an organization is located, or where an action takes place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLocationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-location",
    shellClassName: "lander-semantic--schema-property-location",
    title: "location",
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

(SchemaPropertyLocation as typeof SchemaPropertyLocation & { toStructuredData: (props: SchemaPropertyLocationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
