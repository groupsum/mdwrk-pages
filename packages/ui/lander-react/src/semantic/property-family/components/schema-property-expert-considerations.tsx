import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExpertConsiderationsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyExpertConsiderations({ value, description = "Medical expert advice related to the plan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyExpertConsiderationsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ExpertConsiderationsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-expert-considerations",
    shellClassName: "lander-semantic--schema-property-expert-considerations",
    title: "expertConsiderations",
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
