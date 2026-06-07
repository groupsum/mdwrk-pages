import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ExampleOfWorkPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExampleOfWorkProps extends ExampleOfWorkPropertyInput, GeneratedPropertyUiProps<ExampleOfWorkPropertyInput> {}

export function SchemaPropertyExampleOfWork({ value: legacyValue, description = "A creative work that this work is an example/instance/realization/derivation of.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyExampleOfWorkProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ExampleOfWorkPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-example-of-work",
    shellClassName: "lander-semantic--schema-property-example-of-work",
    title: "exampleOfWork",
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

(SchemaPropertyExampleOfWork as typeof SchemaPropertyExampleOfWork & { toStructuredData: (props: SchemaPropertyExampleOfWorkProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
