import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ColleaguePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyColleagueProps extends ColleaguePropertyInput, GeneratedPropertyUiProps<ColleaguePropertyInput> {}

export function SchemaPropertyColleague({ value: legacyValue, description = "A colleague of the person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyColleagueProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ColleaguePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-colleague",
    shellClassName: "lander-semantic--schema-property-colleague",
    title: "colleague",
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

(SchemaPropertyColleague as typeof SchemaPropertyColleague & { toStructuredData: (props: SchemaPropertyColleagueProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
