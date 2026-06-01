import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFollowupProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFollowup({ value, description = "Typical or recommended followup care after the procedure is performed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFollowupProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FollowupPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-followup",
    shellClassName: "lander-semantic--schema-property-followup",
    title: "followup",
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
