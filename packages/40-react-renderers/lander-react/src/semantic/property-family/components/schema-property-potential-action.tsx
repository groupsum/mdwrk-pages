import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PotentialActionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPotentialActionProps extends PotentialActionPropertyInput, GeneratedPropertyUiProps<PotentialActionPropertyInput> {}

export function SchemaPropertyPotentialAction({ value: legacyValue, description = "Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPotentialActionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PotentialActionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-potential-action",
    shellClassName: "lander-semantic--schema-property-potential-action",
    title: "potentialAction",
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

(SchemaPropertyPotentialAction as typeof SchemaPropertyPotentialAction & { toStructuredData: (props: SchemaPropertyPotentialActionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
