import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface ContactPointOptionProps extends GeneratedEnumerationProps<string> {}

export function ContactPointOption({ value, description = "Enumerated options related to a ContactPoint.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: ContactPointOptionProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.ContactPointOptionStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-contact-point-option",
    shellClassName: "lander-semantic--schema-enumeration-contact-point-option",
    title: "ContactPointOption",
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
