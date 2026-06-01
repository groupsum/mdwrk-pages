import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDistinguishingSignProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDistinguishingSign({ value, description = "One of a set of signs and symptoms that can be used to distinguish this diagnosis from others in the differential diagnosis.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDistinguishingSignProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DistinguishingSignPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-distinguishing-sign",
    shellClassName: "lander-semantic--schema-property-distinguishing-sign",
    title: "distinguishingSign",
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
