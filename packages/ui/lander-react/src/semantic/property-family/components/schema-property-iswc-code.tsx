import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIswcCodeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIswcCode({ value, description = "The International Standard Musical Work Code for the composition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIswcCodeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IswcCodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-iswc-code",
    shellClassName: "lander-semantic--schema-property-iswc-code",
    title: "iswcCode",
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
