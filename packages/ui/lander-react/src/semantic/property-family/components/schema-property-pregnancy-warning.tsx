import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPregnancyWarningProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPregnancyWarning({ value, description = "Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPregnancyWarningProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PregnancyWarningPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-pregnancy-warning",
    shellClassName: "lander-semantic--schema-property-pregnancy-warning",
    title: "pregnancyWarning",
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
