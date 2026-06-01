import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ObjectPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyObjectProps extends ObjectPropertyInput, GeneratedPropertyUiProps<ObjectPropertyInput> {}

export function SchemaPropertyObject({ value: legacyValue, description = "The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read *a book*.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyObjectProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ObjectPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-object",
    shellClassName: "lander-semantic--schema-property-object",
    title: "object",
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
