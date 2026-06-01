import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDisambiguatingDescriptionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDisambiguatingDescription({ value, description = "A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDisambiguatingDescriptionProps) {
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
