import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SpecialtyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySpecialtyProps extends SpecialtyPropertyInput, GeneratedPropertyUiProps<SpecialtyPropertyInput> {}

export function SchemaPropertySpecialty({ value: legacyValue, description = "One of the domain specialities to which this web page's content applies.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySpecialtyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SpecialtyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-specialty",
    shellClassName: "lander-semantic--schema-property-specialty",
    title: "specialty",
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

(SchemaPropertySpecialty as typeof SchemaPropertySpecialty & { toStructuredData: (props: SchemaPropertySpecialtyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
