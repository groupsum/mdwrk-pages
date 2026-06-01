import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EpidemiologyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEpidemiologyProps extends EpidemiologyPropertyInput, GeneratedPropertyUiProps<EpidemiologyPropertyInput> {}

export function SchemaPropertyEpidemiology({ value: legacyValue, description = "The characteristics of associated patients, such as age, gender, race etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEpidemiologyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EpidemiologyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-epidemiology",
    shellClassName: "lander-semantic--schema-property-epidemiology",
    title: "epidemiology",
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
