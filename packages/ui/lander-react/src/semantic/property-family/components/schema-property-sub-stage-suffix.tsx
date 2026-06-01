import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySubStageSuffixProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySubStageSuffix({ value, description = "The substage, e.g. 'a' for Stage IIIa.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySubStageSuffixProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SubStageSuffixPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sub-stage-suffix",
    shellClassName: "lander-semantic--schema-property-sub-stage-suffix",
    title: "subStageSuffix",
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
