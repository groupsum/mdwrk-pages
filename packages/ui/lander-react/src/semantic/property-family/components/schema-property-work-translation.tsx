import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWorkTranslationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyWorkTranslation({ value, description = "A work that is a translation of the content of this work. E.g. 西遊記 has an English workTranslation “Journey to the West”, a German workTranslation “Monkeys Pilgerfahrt” and a Vietnamese  translation Tây du ký bình khảo.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyWorkTranslationProps) {
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
