import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailableLanguageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAvailableLanguage({ value, description = "A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAvailableLanguageProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AvailableLanguagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-available-language",
    shellClassName: "lander-semantic--schema-property-available-language",
    title: "availableLanguage",
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
