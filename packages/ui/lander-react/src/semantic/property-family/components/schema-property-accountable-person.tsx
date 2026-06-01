import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAccountablePersonProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAccountablePerson({ value, description = "Specifies the Person that is legally accountable for the CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAccountablePersonProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AccountablePersonPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-accountable-person",
    shellClassName: "lander-semantic--schema-property-accountable-person",
    title: "accountablePerson",
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
