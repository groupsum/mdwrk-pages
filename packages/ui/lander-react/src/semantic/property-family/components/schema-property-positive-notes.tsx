import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PositiveNotesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPositiveNotesProps extends PositiveNotesPropertyInput, GeneratedPropertyUiProps<PositiveNotesPropertyInput> {}

export function SchemaPropertyPositiveNotes({ value: legacyValue, description = "Provides positive considerations regarding something, for example product highlights or (alongside [[negativeNotes]]) pro/con lists for reviews.\n\nIn the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described.\n\nThe property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most positive is at the beginning of the list).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPositiveNotesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PositiveNotesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-positive-notes",
    shellClassName: "lander-semantic--schema-property-positive-notes",
    title: "positiveNotes",
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

(SchemaPropertyPositiveNotes as typeof SchemaPropertyPositiveNotes & { toStructuredData: (props: SchemaPropertyPositiveNotesProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
