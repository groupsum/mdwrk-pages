import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySecondaryPreventionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySecondaryPrevention({ value, description = "A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySecondaryPreventionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SecondaryPreventionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-secondary-prevention",
    shellClassName: "lander-semantic--schema-property-secondary-prevention",
    title: "secondaryPrevention",
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
