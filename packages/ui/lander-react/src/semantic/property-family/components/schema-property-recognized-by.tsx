import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RecognizedByPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRecognizedByProps extends RecognizedByPropertyInput, GeneratedPropertyUiProps<RecognizedByPropertyInput> {}

export function SchemaPropertyRecognizedBy({ value: legacyValue, description = "An organization that acknowledges the validity, value or utility of a credential. Note: recognition may include a process of quality assurance or accreditation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRecognizedByProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
