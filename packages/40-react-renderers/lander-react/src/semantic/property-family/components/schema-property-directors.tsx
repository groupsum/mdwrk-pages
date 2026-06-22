import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DirectorsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDirectorsProps extends DirectorsPropertyInput, GeneratedPropertyUiProps<DirectorsPropertyInput> {}

export function SchemaPropertyDirectors({ value: legacyValue, description = "A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDirectorsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DirectorsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-directors",
    shellClassName: "lander-semantic--schema-property-directors",
    title: "directors",
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

(SchemaPropertyDirectors as typeof SchemaPropertyDirectors & { toStructuredData: (props: SchemaPropertyDirectorsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
