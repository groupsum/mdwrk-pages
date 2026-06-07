import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PossibleTreatmentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPossibleTreatmentProps extends PossibleTreatmentPropertyInput, GeneratedPropertyUiProps<PossibleTreatmentPropertyInput> {}

export function SchemaPropertyPossibleTreatment({ value: legacyValue, description = "A possible treatment to address this condition, sign or symptom.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPossibleTreatmentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyPossibleTreatment as typeof SchemaPropertyPossibleTreatment & { toStructuredData: (props: SchemaPropertyPossibleTreatmentProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
