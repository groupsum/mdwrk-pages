import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServicePhoneProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyServicePhone({ value, description = "The phone number to use to access the service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyServicePhoneProps) {
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
