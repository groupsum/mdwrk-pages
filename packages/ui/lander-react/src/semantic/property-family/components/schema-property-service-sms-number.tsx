import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServiceSmsNumberProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyServiceSmsNumber({ value, description = "The number to access the service by text message.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyServiceSmsNumberProps) {
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
