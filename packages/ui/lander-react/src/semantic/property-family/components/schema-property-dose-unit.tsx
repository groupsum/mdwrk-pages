import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DoseUnitPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDoseUnitProps extends DoseUnitPropertyInput, GeneratedPropertyUiProps<DoseUnitPropertyInput> {}

export function SchemaPropertyDoseUnit({ value: legacyValue, description = "The unit of the dose, e.g. 'mg'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDoseUnitProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DoseUnitPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-dose-unit",
    shellClassName: "lander-semantic--schema-property-dose-unit",
    title: "doseUnit",
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

(SchemaPropertyDoseUnit as typeof SchemaPropertyDoseUnit & { toStructuredData: (props: SchemaPropertyDoseUnitProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
