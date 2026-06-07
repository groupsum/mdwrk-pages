import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CmnsClsClassifierInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, buildGeneratedTypeStructuredData, renderGeneratedTypeCard } from "../shared.js";

export interface CmnsClsClassifierProps extends CmnsClsClassifierInput, GeneratedTypeUiProps<CmnsClsClassifierInput> {}

export function CmnsClsClassifier({ value: legacyValue, description = "", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: CmnsClsClassifierProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.CmnsClsClassifierStructuredData,
    defaultEyebrow: "Type",
    kind: "cmns-cls-classifier",
    shellClassName: "lander-semantic--cmns-cls-classifier",
    title: "cmns-cls_Classifier",
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

(CmnsClsClassifier as typeof CmnsClsClassifier & { toStructuredData: (props: CmnsClsClassifierProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedTypeStructuredData(props);
