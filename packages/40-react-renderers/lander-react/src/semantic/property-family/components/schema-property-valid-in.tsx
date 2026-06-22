import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ValidInPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyValidInProps extends ValidInPropertyInput, GeneratedPropertyUiProps<ValidInPropertyInput> {}

export function SchemaPropertyValidIn({ value: legacyValue, description = "The geographic area where the item is valid. Applies for example to a [[Permit]], a [[Certification]], or an [[EducationalOccupationalCredential]]. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyValidInProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ValidInPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-valid-in",
    shellClassName: "lander-semantic--schema-property-valid-in",
    title: "validIn",
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

(SchemaPropertyValidIn as typeof SchemaPropertyValidIn & { toStructuredData: (props: SchemaPropertyValidInProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
