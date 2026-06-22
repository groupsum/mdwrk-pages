import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SuperEventPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuperEventProps extends SuperEventPropertyInput, GeneratedPropertyUiProps<SuperEventPropertyInput> {}

export function SchemaPropertySuperEvent({ value: legacyValue, description = "An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySuperEventProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SuperEventPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-super-event",
    shellClassName: "lander-semantic--schema-property-super-event",
    title: "superEvent",
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

(SchemaPropertySuperEvent as typeof SchemaPropertySuperEvent & { toStructuredData: (props: SchemaPropertySuperEventProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
