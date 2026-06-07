import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ColleaguesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyColleaguesProps extends ColleaguesPropertyInput, GeneratedPropertyUiProps<ColleaguesPropertyInput> {}

export function SchemaPropertyColleagues({ value: legacyValue, description = "A colleague of the person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyColleaguesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ColleaguesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-colleagues",
    shellClassName: "lander-semantic--schema-property-colleagues",
    title: "colleagues",
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

(SchemaPropertyColleagues as typeof SchemaPropertyColleagues & { toStructuredData: (props: SchemaPropertyColleaguesProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
