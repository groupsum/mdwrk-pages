import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AnatomicalSystemInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, renderGeneratedTypeCard } from "../shared.js";

export interface AnatomicalSystemProps extends AnatomicalSystemInput, GeneratedTypeUiProps<AnatomicalSystemInput> {}

export function AnatomicalSystem({ value: legacyValue, description = "An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can include circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: AnatomicalSystemProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.AnatomicalSystemStructuredData,
    defaultEyebrow: "Type",
    kind: "anatomical-system",
    shellClassName: "lander-semantic--anatomical-system",
    title: "AnatomicalSystem",
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
