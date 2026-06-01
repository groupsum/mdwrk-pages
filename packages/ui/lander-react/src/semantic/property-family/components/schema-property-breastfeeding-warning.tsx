import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBreastfeedingWarningProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBreastfeedingWarning({ value, description = "Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBreastfeedingWarningProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BreastfeedingWarningPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-breastfeeding-warning",
    shellClassName: "lander-semantic--schema-property-breastfeeding-warning",
    title: "breastfeedingWarning",
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
