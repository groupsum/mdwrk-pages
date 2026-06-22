import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { WorstRatingPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWorstRatingProps extends WorstRatingPropertyInput, GeneratedPropertyUiProps<WorstRatingPropertyInput> {}

export function SchemaPropertyWorstRating({ value: legacyValue, description = "The lowest value allowed in this rating system.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyWorstRatingProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WorstRatingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-worst-rating",
    shellClassName: "lander-semantic--schema-property-worst-rating",
    title: "worstRating",
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

(SchemaPropertyWorstRating as typeof SchemaPropertyWorstRating & { toStructuredData: (props: SchemaPropertyWorstRatingProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
