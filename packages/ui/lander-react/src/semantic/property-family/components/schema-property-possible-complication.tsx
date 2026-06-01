import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPossibleComplicationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPossibleComplication({ value, description = "A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPossibleComplicationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PossibleComplicationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-possible-complication",
    shellClassName: "lander-semantic--schema-property-possible-complication",
    title: "possibleComplication",
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
