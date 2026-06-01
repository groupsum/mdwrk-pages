import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelatedDrugProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRelatedDrug({ value, description = "Any other drug related to this one, for example commonly-prescribed alternatives.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRelatedDrugProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RelatedDrugPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-related-drug",
    shellClassName: "lander-semantic--schema-property-related-drug",
    title: "relatedDrug",
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
