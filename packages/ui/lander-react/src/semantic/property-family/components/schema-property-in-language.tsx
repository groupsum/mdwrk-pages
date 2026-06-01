import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InLanguagePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInLanguageProps extends InLanguagePropertyInput, GeneratedPropertyUiProps<InLanguagePropertyInput> {}

export function SchemaPropertyInLanguage({ value: legacyValue, description = "The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInLanguageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InLanguagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-in-language",
    shellClassName: "lander-semantic--schema-property-in-language",
    title: "inLanguage",
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
