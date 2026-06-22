import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedDatatypeProps, buildGeneratedDatatypeStructuredData, renderGeneratedDatatypeCard } from "../shared.js";

export interface BooleanProps extends GeneratedDatatypeProps<boolean> {}

export function Boolean({ value, description = "Boolean: True or False.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: BooleanProps) {
  return renderGeneratedDatatypeCard({
    StructuredDataComponent: structuredDataReact.BooleanStructuredData,
    defaultEyebrow: "Datatype",
    kind: "schema-datatype-boolean",
    shellClassName: "lander-semantic--schema-datatype-boolean",
    title: "Boolean",
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

(Boolean as typeof Boolean & { toStructuredData: (props: BooleanProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedDatatypeStructuredData(props);
