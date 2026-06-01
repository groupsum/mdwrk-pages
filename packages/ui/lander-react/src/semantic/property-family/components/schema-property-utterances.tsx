import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUtterancesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyUtterances({ value, description = "Text of an utterances (spoken words, lyrics etc.) that occurs at a certain section of a media object, represented as a [[HyperTocEntry]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyUtterancesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UtterancesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-utterances",
    shellClassName: "lander-semantic--schema-property-utterances",
    title: "utterances",
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
