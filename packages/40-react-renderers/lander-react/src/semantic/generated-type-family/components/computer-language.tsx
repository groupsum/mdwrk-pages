import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ComputerLanguageInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, buildGeneratedTypeStructuredData, renderGeneratedTypeCard } from "../shared.js";

export interface ComputerLanguageProps extends ComputerLanguageInput, GeneratedTypeUiProps<ComputerLanguageInput> {}

export function ComputerLanguage({ value: legacyValue, description = "This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the [[Language]] type.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: ComputerLanguageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.ComputerLanguageStructuredData,
    defaultEyebrow: "Type",
    kind: "computer-language",
    shellClassName: "lander-semantic--computer-language",
    title: "ComputerLanguage",
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

(ComputerLanguage as typeof ComputerLanguage & { toStructuredData: (props: ComputerLanguageProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedTypeStructuredData(props);
