import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPositiveNotesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPositiveNotes({ value, description = "Provides positive considerations regarding something, for example product highlights or (alongside [[negativeNotes]]) pro/con lists for reviews.\n\nIn the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described.\n\nThe property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most positive is at the beginning of the list).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPositiveNotesProps) {
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
