import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface MedicineSystemProps extends GeneratedEnumerationProps<string> {}

export function MedicineSystem({ value, description = "Systems of medical practice.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: MedicineSystemProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.MedicineSystemStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-medicine-system",
    shellClassName: "lander-semantic--schema-enumeration-medicine-system",
    title: "MedicineSystem",
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

(MedicineSystem as typeof MedicineSystem & { toStructuredData: (props: MedicineSystemProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
