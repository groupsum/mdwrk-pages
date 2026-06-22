import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RelatedDrugPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelatedDrugProps extends RelatedDrugPropertyInput, GeneratedPropertyUiProps<RelatedDrugPropertyInput> {}

export function SchemaPropertyRelatedDrug({ value: legacyValue, description = "Any other drug related to this one, for example commonly-prescribed alternatives.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRelatedDrugProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyRelatedDrug as typeof SchemaPropertyRelatedDrug & { toStructuredData: (props: SchemaPropertyRelatedDrugProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
