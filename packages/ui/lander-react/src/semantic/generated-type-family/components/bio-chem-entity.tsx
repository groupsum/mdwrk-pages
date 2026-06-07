import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BioChemEntityInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, buildGeneratedTypeStructuredData, renderGeneratedTypeCard } from "../shared.js";

export interface BioChemEntityProps extends BioChemEntityInput, GeneratedTypeUiProps<BioChemEntityInput> {}

export function BioChemEntity({ value: legacyValue, description = "Any biological, chemical, or biochemical thing. For example: a protein; a gene; a chemical; a synthetic chemical.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: BioChemEntityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.BioChemEntityStructuredData,
    defaultEyebrow: "Type",
    kind: "bio-chem-entity",
    shellClassName: "lander-semantic--bio-chem-entity",
    title: "BioChemEntity",
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

(BioChemEntity as typeof BioChemEntity & { toStructuredData: (props: BioChemEntityProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedTypeStructuredData(props);
