import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRecognizedByProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRecognizedBy({ value, description = "An organization that acknowledges the validity, value or utility of a credential. Note: recognition may include a process of quality assurance or accreditation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRecognizedByProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RecognizedByPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-recognized-by",
    shellClassName: "lander-semantic--schema-property-recognized-by",
    title: "recognizedBy",
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
