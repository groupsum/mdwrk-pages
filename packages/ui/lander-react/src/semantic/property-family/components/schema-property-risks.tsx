import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRisksProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRisks({ value, description = "Specific physiologic risks associated to the diet plan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRisksProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RisksPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-risks",
    shellClassName: "lander-semantic--schema-property-risks",
    title: "risks",
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
