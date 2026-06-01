import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIdentifyingTestProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIdentifyingTest({ value, description = "A diagnostic test that can identify this sign.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIdentifyingTestProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IdentifyingTestPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-identifying-test",
    shellClassName: "lander-semantic--schema-property-identifying-test",
    title: "identifyingTest",
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
