import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MechanismOfActionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMechanismOfActionProps extends MechanismOfActionPropertyInput, GeneratedPropertyUiProps<MechanismOfActionPropertyInput> {}

export function SchemaPropertyMechanismOfAction({ value: legacyValue, description = "The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMechanismOfActionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MechanismOfActionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-mechanism-of-action",
    shellClassName: "lander-semantic--schema-property-mechanism-of-action",
    title: "mechanismOfAction",
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

(SchemaPropertyMechanismOfAction as typeof SchemaPropertyMechanismOfAction & { toStructuredData: (props: SchemaPropertyMechanismOfActionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
