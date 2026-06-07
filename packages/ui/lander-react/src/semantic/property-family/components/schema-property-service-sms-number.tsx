import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ServiceSmsNumberPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServiceSmsNumberProps extends ServiceSmsNumberPropertyInput, GeneratedPropertyUiProps<ServiceSmsNumberPropertyInput> {}

export function SchemaPropertyServiceSmsNumber({ value: legacyValue, description = "The number to access the service by text message.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyServiceSmsNumberProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ServiceSmsNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-service-sms-number",
    shellClassName: "lander-semantic--schema-property-service-sms-number",
    title: "serviceSmsNumber",
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

(SchemaPropertyServiceSmsNumber as typeof SchemaPropertyServiceSmsNumber & { toStructuredData: (props: SchemaPropertyServiceSmsNumberProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
