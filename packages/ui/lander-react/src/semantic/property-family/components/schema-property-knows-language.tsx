import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyKnowsLanguageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyKnowsLanguage({ value, description = "Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyKnowsLanguageProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.KnowsLanguagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-knows-language",
    shellClassName: "lander-semantic--schema-property-knows-language",
    title: "knowsLanguage",
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
