import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface MeasurementTypeEnumerationProps extends GeneratedEnumerationProps<string> {}

export function MeasurementTypeEnumeration({ value, description = "Enumeration of common measurement types (or dimensions), for example \"chest\" for a person, \"inseam\" for pants, \"gauge\" for screws, or \"wheel\" for bicycles.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: MeasurementTypeEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.MeasurementTypeEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-measurement-type-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-measurement-type-enumeration",
    title: "MeasurementTypeEnumeration",
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

(MeasurementTypeEnumeration as typeof MeasurementTypeEnumeration & { toStructuredData: (props: MeasurementTypeEnumerationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
