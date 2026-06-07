import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AssociatedPathophysiologyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedPathophysiologyProps extends AssociatedPathophysiologyPropertyInput, GeneratedPropertyUiProps<AssociatedPathophysiologyPropertyInput> {}

export function SchemaPropertyAssociatedPathophysiology({ value: legacyValue, description = "If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAssociatedPathophysiologyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AssociatedPathophysiologyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-associated-pathophysiology",
    shellClassName: "lander-semantic--schema-property-associated-pathophysiology",
    title: "associatedPathophysiology",
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

(SchemaPropertyAssociatedPathophysiology as typeof SchemaPropertyAssociatedPathophysiology & { toStructuredData: (props: SchemaPropertyAssociatedPathophysiologyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
