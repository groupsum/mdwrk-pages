import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExampleOfWorkProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyExampleOfWork({ value, description = "A creative work that this work is an example/instance/realization/derivation of.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyExampleOfWorkProps) {
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
