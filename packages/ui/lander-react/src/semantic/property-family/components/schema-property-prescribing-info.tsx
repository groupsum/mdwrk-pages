import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrescribingInfoProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPrescribingInfo({ value, description = "Link to prescribing information for the drug.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPrescribingInfoProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PrescribingInfoPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-prescribing-info",
    shellClassName: "lander-semantic--schema-property-prescribing-info",
    title: "prescribingInfo",
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
