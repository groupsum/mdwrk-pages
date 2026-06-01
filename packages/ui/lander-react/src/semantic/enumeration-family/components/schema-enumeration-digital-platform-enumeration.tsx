import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface DigitalPlatformEnumerationProps extends GeneratedEnumerationProps<string> {}

export function DigitalPlatformEnumeration({ value, description = "Enumerates some common technology platforms, for use with properties such as [[actionPlatform]]. It is not supposed to be comprehensive - when a suitable code is not enumerated here, textual or URL values can be used instead. These codes are at a fairly high level and do not deal with versioning and other nuance. Additional codes can be suggested [in github](https://github.com/schemaorg/schemaorg/issues/3057). ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: DigitalPlatformEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.DigitalPlatformEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-digital-platform-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-digital-platform-enumeration",
    title: "DigitalPlatformEnumeration",
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
