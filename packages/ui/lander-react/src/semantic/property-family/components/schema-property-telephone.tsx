import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TelephonePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTelephoneProps extends TelephonePropertyInput, GeneratedPropertyUiProps<TelephonePropertyInput> {}

export function SchemaPropertyTelephone({ value: legacyValue, description = "The telephone number.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTelephoneProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TelephonePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-telephone",
    shellClassName: "lander-semantic--schema-property-telephone",
    title: "telephone",
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

(SchemaPropertyTelephone as typeof SchemaPropertyTelephone & { toStructuredData: (props: SchemaPropertyTelephoneProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
