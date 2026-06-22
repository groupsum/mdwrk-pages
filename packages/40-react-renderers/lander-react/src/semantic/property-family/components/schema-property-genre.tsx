import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GenrePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGenreProps extends GenrePropertyInput, GeneratedPropertyUiProps<GenrePropertyInput> {}

export function SchemaPropertyGenre({ value: legacyValue, description = "Genre of the creative work, broadcast channel or group.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGenreProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GenrePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-genre",
    shellClassName: "lander-semantic--schema-property-genre",
    title: "genre",
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

(SchemaPropertyGenre as typeof SchemaPropertyGenre & { toStructuredData: (props: SchemaPropertyGenreProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
