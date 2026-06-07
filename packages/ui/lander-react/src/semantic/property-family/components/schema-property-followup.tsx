import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FollowupPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFollowupProps extends FollowupPropertyInput, GeneratedPropertyUiProps<FollowupPropertyInput> {}

export function SchemaPropertyFollowup({ value: legacyValue, description = "Typical or recommended followup care after the procedure is performed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFollowupProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyFollowup as typeof SchemaPropertyFollowup & { toStructuredData: (props: SchemaPropertyFollowupProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
