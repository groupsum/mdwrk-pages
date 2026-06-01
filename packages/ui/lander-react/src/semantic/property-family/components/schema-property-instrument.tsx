import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInstrumentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInstrument({ value, description = "The object that helped the agent perform the action. E.g. John wrote a book with *a pen*.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInstrumentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InstrumentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-instrument",
    shellClassName: "lander-semantic--schema-property-instrument",
    title: "instrument",
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
