import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { UtterancesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUtterancesProps extends UtterancesPropertyInput, GeneratedPropertyUiProps<UtterancesPropertyInput> {}

export function SchemaPropertyUtterances({ value: legacyValue, description = "Text of an utterances (spoken words, lyrics etc.) that occurs at a certain section of a media object, represented as a [[HyperTocEntry]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyUtterancesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyUtterances as typeof SchemaPropertyUtterances & { toStructuredData: (props: SchemaPropertyUtterancesProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
