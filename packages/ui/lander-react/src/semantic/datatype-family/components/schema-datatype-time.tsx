import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedDatatypeProps, renderGeneratedDatatypeCard } from "../shared.js";

export interface TimeProps extends GeneratedDatatypeProps<string> {}

export function Time({ value, description = "A point in time recurring on multiple days in the form hh:mm:ss[Z|(+|-)hh:mm] (see [XML schema for details](http://www.w3.org/TR/xmlschema-2/#time)).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: TimeProps) {
  return renderGeneratedDatatypeCard({
    StructuredDataComponent: structuredDataReact.TimeStructuredData,
    defaultEyebrow: "Datatype",
    kind: "schema-datatype-time",
    shellClassName: "lander-semantic--schema-datatype-time",
    title: "Time",
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
