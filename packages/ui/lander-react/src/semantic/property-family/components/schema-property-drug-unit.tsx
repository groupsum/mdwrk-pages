import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DrugUnitPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDrugUnitProps extends DrugUnitPropertyInput, GeneratedPropertyUiProps<DrugUnitPropertyInput> {}

export function SchemaPropertyDrugUnit({ value: legacyValue, description = "The unit in which the drug is measured, e.g. '5 mg tablet'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDrugUnitProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DrugUnitPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-drug-unit",
    shellClassName: "lander-semantic--schema-property-drug-unit",
    title: "drugUnit",
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

(SchemaPropertyDrugUnit as typeof SchemaPropertyDrugUnit & { toStructuredData: (props: SchemaPropertyDrugUnitProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
