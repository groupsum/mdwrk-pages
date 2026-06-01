import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTranslationOfWorkProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTranslationOfWork({ value, description = "The work that this work has been translated from. E.g. 物种起源 is a translationOf “On the Origin of Species”.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTranslationOfWorkProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TranslationOfWorkPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-translation-of-work",
    shellClassName: "lander-semantic--schema-property-translation-of-work",
    title: "translationOfWork",
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
