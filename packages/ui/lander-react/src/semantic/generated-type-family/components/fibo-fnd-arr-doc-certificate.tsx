import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FiboFndArrDocCertificateInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, buildGeneratedTypeStructuredData, renderGeneratedTypeCard } from "../shared.js";

export interface FiboFndArrDocCertificateProps extends FiboFndArrDocCertificateInput, GeneratedTypeUiProps<FiboFndArrDocCertificateInput> {}

export function FiboFndArrDocCertificate({ value: legacyValue, description = "", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: FiboFndArrDocCertificateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.FiboFndArrDocCertificateStructuredData,
    defaultEyebrow: "Type",
    kind: "fibo-fnd-arr-doc-certificate",
    shellClassName: "lander-semantic--fibo-fnd-arr-doc-certificate",
    title: "fibo-fnd-arr-doc_Certificate",
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

(FiboFndArrDocCertificate as typeof FiboFndArrDocCertificate & { toStructuredData: (props: FiboFndArrDocCertificateProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedTypeStructuredData(props);
