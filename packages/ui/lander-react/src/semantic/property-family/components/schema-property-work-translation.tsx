import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { WorkTranslationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWorkTranslationProps extends WorkTranslationPropertyInput, GeneratedPropertyUiProps<WorkTranslationPropertyInput> {}

export function SchemaPropertyWorkTranslation({ value: legacyValue, description = "A work that is a translation of the content of this work. E.g. 西遊記 has an English workTranslation “Journey to the West”, a German workTranslation “Monkeys Pilgerfahrt” and a Vietnamese  translation Tây du ký bình khảo.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyWorkTranslationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WorkTranslationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-work-translation",
    shellClassName: "lander-semantic--schema-property-work-translation",
    title: "workTranslation",
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
