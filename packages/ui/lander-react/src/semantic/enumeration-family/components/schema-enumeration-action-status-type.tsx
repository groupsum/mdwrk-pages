import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface ActionStatusTypeProps extends GeneratedEnumerationProps<string> {}

export function ActionStatusType({ value, description = "The status of an Action.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: ActionStatusTypeProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.ActionStatusTypeStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-action-status-type",
    shellClassName: "lander-semantic--schema-enumeration-action-status-type",
    title: "ActionStatusType",
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
