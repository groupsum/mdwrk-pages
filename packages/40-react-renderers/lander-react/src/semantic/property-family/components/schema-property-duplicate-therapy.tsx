import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DuplicateTherapyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDuplicateTherapyProps extends DuplicateTherapyPropertyInput, GeneratedPropertyUiProps<DuplicateTherapyPropertyInput> {}

export function SchemaPropertyDuplicateTherapy({ value: legacyValue, description = "A therapy that duplicates or overlaps this one.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDuplicateTherapyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DuplicateTherapyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-duplicate-therapy",
    shellClassName: "lander-semantic--schema-property-duplicate-therapy",
    title: "duplicateTherapy",
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

(SchemaPropertyDuplicateTherapy as typeof SchemaPropertyDuplicateTherapy & { toStructuredData: (props: SchemaPropertyDuplicateTherapyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
