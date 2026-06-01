import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEpidemiologyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEpidemiology({ value, description = "The characteristics of associated patients, such as age, gender, race etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEpidemiologyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EpidemiologyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-epidemiology",
    shellClassName: "lander-semantic--schema-property-epidemiology",
    title: "epidemiology",
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
