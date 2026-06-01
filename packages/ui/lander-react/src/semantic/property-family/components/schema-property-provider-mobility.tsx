import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProviderMobilityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProviderMobility({ value, description = "Indicates the mobility of a provided service (e.g. 'static', 'dynamic').", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProviderMobilityProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProviderMobilityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-provider-mobility",
    shellClassName: "lander-semantic--schema-property-provider-mobility",
    title: "providerMobility",
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
