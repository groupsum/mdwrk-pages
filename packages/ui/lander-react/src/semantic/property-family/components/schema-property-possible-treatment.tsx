import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPossibleTreatmentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPossibleTreatment({ value, description = "A possible treatment to address this condition, sign or symptom.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPossibleTreatmentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PossibleTreatmentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-possible-treatment",
    shellClassName: "lander-semantic--schema-property-possible-treatment",
    title: "possibleTreatment",
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
