import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TranslationOfWorkPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTranslationOfWorkProps extends TranslationOfWorkPropertyInput, GeneratedPropertyUiProps<TranslationOfWorkPropertyInput> {}

export function SchemaPropertyTranslationOfWork({ value: legacyValue, description = "The work that this work has been translated from. E.g. 物种起源 is a translationOf “On the Origin of Species”.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTranslationOfWorkProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
