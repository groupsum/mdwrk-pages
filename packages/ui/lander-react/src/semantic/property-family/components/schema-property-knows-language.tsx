import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { KnowsLanguagePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyKnowsLanguageProps extends KnowsLanguagePropertyInput, GeneratedPropertyUiProps<KnowsLanguagePropertyInput> {}

export function SchemaPropertyKnowsLanguage({ value: legacyValue, description = "Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyKnowsLanguageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyKnowsLanguage as typeof SchemaPropertyKnowsLanguage & { toStructuredData: (props: SchemaPropertyKnowsLanguageProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
