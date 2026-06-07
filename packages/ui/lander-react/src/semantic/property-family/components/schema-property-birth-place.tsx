import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BirthPlacePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBirthPlaceProps extends BirthPlacePropertyInput, GeneratedPropertyUiProps<BirthPlacePropertyInput> {}

export function SchemaPropertyBirthPlace({ value: legacyValue, description = "The place where the person was born.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBirthPlaceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BirthPlacePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-birth-place",
    shellClassName: "lander-semantic--schema-property-birth-place",
    title: "birthPlace",
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

(SchemaPropertyBirthPlace as typeof SchemaPropertyBirthPlace & { toStructuredData: (props: SchemaPropertyBirthPlaceProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
