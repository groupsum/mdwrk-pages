import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AnatomicalStructureInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, buildGeneratedTypeStructuredData, renderGeneratedTypeCard } from "../shared.js";

export interface AnatomicalStructureProps extends AnatomicalStructureInput, GeneratedTypeUiProps<AnatomicalStructureInput> {}

export function AnatomicalStructure({ value: legacyValue, description = "Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: AnatomicalStructureProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.AnatomicalStructureStructuredData,
    defaultEyebrow: "Type",
    kind: "anatomical-structure",
    shellClassName: "lander-semantic--anatomical-structure",
    title: "AnatomicalStructure",
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

(AnatomicalStructure as typeof AnatomicalStructure & { toStructuredData: (props: AnatomicalStructureProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedTypeStructuredData(props);
