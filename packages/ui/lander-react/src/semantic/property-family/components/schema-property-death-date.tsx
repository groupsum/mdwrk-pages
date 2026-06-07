import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DeathDatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDeathDateProps extends DeathDatePropertyInput, GeneratedPropertyUiProps<DeathDatePropertyInput> {}

export function SchemaPropertyDeathDate({ value: legacyValue, description = "Date of death.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDeathDateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DeathDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-death-date",
    shellClassName: "lander-semantic--schema-property-death-date",
    title: "deathDate",
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

(SchemaPropertyDeathDate as typeof SchemaPropertyDeathDate & { toStructuredData: (props: SchemaPropertyDeathDateProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
