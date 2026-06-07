import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DisambiguatingDescriptionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDisambiguatingDescriptionProps extends DisambiguatingDescriptionPropertyInput, GeneratedPropertyUiProps<DisambiguatingDescriptionPropertyInput> {}

export function SchemaPropertyDisambiguatingDescription({ value: legacyValue, description = "A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDisambiguatingDescriptionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DisambiguatingDescriptionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-disambiguating-description",
    shellClassName: "lander-semantic--schema-property-disambiguating-description",
    title: "disambiguatingDescription",
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

(SchemaPropertyDisambiguatingDescription as typeof SchemaPropertyDisambiguatingDescription & { toStructuredData: (props: SchemaPropertyDisambiguatingDescriptionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
