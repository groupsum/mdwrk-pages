import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BirthDatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBirthDateProps extends BirthDatePropertyInput, GeneratedPropertyUiProps<BirthDatePropertyInput> {}

export function SchemaPropertyBirthDate({ value: legacyValue, description = "Date of birth.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBirthDateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BirthDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-birth-date",
    shellClassName: "lander-semantic--schema-property-birth-date",
    title: "birthDate",
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

(SchemaPropertyBirthDate as typeof SchemaPropertyBirthDate & { toStructuredData: (props: SchemaPropertyBirthDateProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
