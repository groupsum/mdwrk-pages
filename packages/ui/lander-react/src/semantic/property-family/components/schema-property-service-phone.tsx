import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ServicePhonePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServicePhoneProps extends ServicePhonePropertyInput, GeneratedPropertyUiProps<ServicePhonePropertyInput> {}

export function SchemaPropertyServicePhone({ value: legacyValue, description = "The phone number to use to access the service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyServicePhoneProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ServicePhonePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-service-phone",
    shellClassName: "lander-semantic--schema-property-service-phone",
    title: "servicePhone",
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
