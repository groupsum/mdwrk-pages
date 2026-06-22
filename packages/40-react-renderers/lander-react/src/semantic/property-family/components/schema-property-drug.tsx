import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DrugPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDrugProps extends DrugPropertyInput, GeneratedPropertyUiProps<DrugPropertyInput> {}

export function SchemaPropertyDrug({ value: legacyValue, description = "Specifying a drug or medicine used in a medication procedure.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDrugProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DrugPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-drug",
    shellClassName: "lander-semantic--schema-property-drug",
    title: "drug",
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

(SchemaPropertyDrug as typeof SchemaPropertyDrug & { toStructuredData: (props: SchemaPropertyDrugProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
