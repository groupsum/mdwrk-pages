import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DrugInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, buildGeneratedTypeStructuredData, renderGeneratedTypeCard } from "../shared.js";

export interface DrugProps extends DrugInput, GeneratedTypeUiProps<DrugInput> {}

export function Drug({ value: legacyValue, description = "A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge makes a clear difference between them.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: DrugProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.DrugStructuredData,
    defaultEyebrow: "Type",
    kind: "drug",
    shellClassName: "lander-semantic--drug",
    title: "Drug",
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

(Drug as typeof Drug & { toStructuredData: (props: DrugProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedTypeStructuredData(props);
