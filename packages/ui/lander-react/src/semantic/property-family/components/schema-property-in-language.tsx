import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInLanguageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInLanguage({ value, description = "The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInLanguageProps) {
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
