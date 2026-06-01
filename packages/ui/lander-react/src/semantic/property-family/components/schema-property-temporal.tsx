import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTemporalProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTemporal({ value, description = "The \"temporal\" property can be used in cases where more specific properties\n(e.g. [[temporalCoverage]], [[dateCreated]], [[dateModified]], [[datePublished]]) are not known to be appropriate.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTemporalProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TemporalPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-temporal",
    shellClassName: "lander-semantic--schema-property-temporal",
    title: "temporal",
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
