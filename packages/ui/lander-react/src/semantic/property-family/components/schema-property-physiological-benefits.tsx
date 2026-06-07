import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PhysiologicalBenefitsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPhysiologicalBenefitsProps extends PhysiologicalBenefitsPropertyInput, GeneratedPropertyUiProps<PhysiologicalBenefitsPropertyInput> {}

export function SchemaPropertyPhysiologicalBenefits({ value: legacyValue, description = "Specific physiologic benefits associated to the plan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPhysiologicalBenefitsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PhysiologicalBenefitsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-physiological-benefits",
    shellClassName: "lander-semantic--schema-property-physiological-benefits",
    title: "physiologicalBenefits",
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

(SchemaPropertyPhysiologicalBenefits as typeof SchemaPropertyPhysiologicalBenefits & { toStructuredData: (props: SchemaPropertyPhysiologicalBenefitsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
