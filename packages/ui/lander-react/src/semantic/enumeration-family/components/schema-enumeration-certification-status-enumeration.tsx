import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface CertificationStatusEnumerationProps extends GeneratedEnumerationProps<string> {}

export function CertificationStatusEnumeration({ value, description = "Enumerates the different statuses of a Certification (Active and Inactive).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: CertificationStatusEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.CertificationStatusEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-certification-status-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-certification-status-enumeration",
    title: "CertificationStatusEnumeration",
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

(CertificationStatusEnumeration as typeof CertificationStatusEnumeration & { toStructuredData: (props: CertificationStatusEnumerationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
