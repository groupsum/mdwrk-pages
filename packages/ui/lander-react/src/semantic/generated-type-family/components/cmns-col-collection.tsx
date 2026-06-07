import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CmnsColCollectionInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, buildGeneratedTypeStructuredData, renderGeneratedTypeCard } from "../shared.js";

export interface CmnsColCollectionProps extends CmnsColCollectionInput, GeneratedTypeUiProps<CmnsColCollectionInput> {}

export function CmnsColCollection({ value: legacyValue, description = "", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: CmnsColCollectionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.CmnsColCollectionStructuredData,
    defaultEyebrow: "Type",
    kind: "cmns-col-collection",
    shellClassName: "lander-semantic--cmns-col-collection",
    title: "cmns-col_Collection",
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

(CmnsColCollection as typeof CmnsColCollection & { toStructuredData: (props: CmnsColCollectionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedTypeStructuredData(props);
