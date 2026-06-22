import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IdentifyingExamPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIdentifyingExamProps extends IdentifyingExamPropertyInput, GeneratedPropertyUiProps<IdentifyingExamPropertyInput> {}

export function SchemaPropertyIdentifyingExam({ value: legacyValue, description = "A physical examination that can identify this sign.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIdentifyingExamProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IdentifyingExamPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-identifying-exam",
    shellClassName: "lander-semantic--schema-property-identifying-exam",
    title: "identifyingExam",
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

(SchemaPropertyIdentifyingExam as typeof SchemaPropertyIdentifyingExam & { toStructuredData: (props: SchemaPropertyIdentifyingExamProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
