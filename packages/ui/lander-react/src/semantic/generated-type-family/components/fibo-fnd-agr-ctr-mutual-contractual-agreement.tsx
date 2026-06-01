import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FiboFndAgrCtrMutualContractualAgreementInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, renderGeneratedTypeCard } from "../shared.js";

export interface FiboFndAgrCtrMutualContractualAgreementProps extends FiboFndAgrCtrMutualContractualAgreementInput, GeneratedTypeUiProps<FiboFndAgrCtrMutualContractualAgreementInput> {}

export function FiboFndAgrCtrMutualContractualAgreement({ value: legacyValue, description = "", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: FiboFndAgrCtrMutualContractualAgreementProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.FiboFndAgrCtrMutualContractualAgreementStructuredData,
    defaultEyebrow: "Type",
    kind: "fibo-fnd-agr-ctr-mutual-contractual-agreement",
    shellClassName: "lander-semantic--fibo-fnd-agr-ctr-mutual-contractual-agreement",
    title: "fibo-fnd-agr-ctr_MutualContractualAgreement",
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
