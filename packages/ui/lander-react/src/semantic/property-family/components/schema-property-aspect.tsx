import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAspectProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAspect({ value, description = "An aspect of medical practice that is considered on the page, such as 'diagnosis', 'treatment', 'causes', 'prognosis', 'etiology', 'epidemiology', etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAspectProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AspectPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-aspect",
    shellClassName: "lander-semantic--schema-property-aspect",
    title: "aspect",
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
