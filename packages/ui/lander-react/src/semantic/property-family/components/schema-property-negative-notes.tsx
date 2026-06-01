import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNegativeNotesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNegativeNotes({ value, description = "Provides negative considerations regarding something, most typically in pro/con lists for reviews (alongside [[positiveNotes]]). For symmetry \n\nIn the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described. Since product descriptions \ntend to emphasise positive claims, it may be relatively unusual to find [[negativeNotes]] used in this way. Nevertheless for the sake of symmetry, [[negativeNotes]] can be used on [[Product]].\n\nThe property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most negative is at the beginning of the list).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNegativeNotesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NegativeNotesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-negative-notes",
    shellClassName: "lander-semantic--schema-property-negative-notes",
    title: "negativeNotes",
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
