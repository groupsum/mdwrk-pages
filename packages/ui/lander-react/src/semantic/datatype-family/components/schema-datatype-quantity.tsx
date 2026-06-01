import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedDatatypeProps, renderGeneratedDatatypeCard } from "../shared.js";

export interface QuantityProps extends GeneratedDatatypeProps<number | string> {}

export function Quantity({ value, description = "Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are strings like '3 kg' or '4 milligrams'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: QuantityProps) {
  return renderGeneratedDatatypeCard({
    StructuredDataComponent: structuredDataReact.QuantityStructuredData,
    defaultEyebrow: "Datatype",
    kind: "schema-datatype-quantity",
    shellClassName: "lander-semantic--schema-datatype-quantity",
    title: "Quantity",
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
