import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RecognizingAuthorityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRecognizingAuthorityProps extends RecognizingAuthorityPropertyInput, GeneratedPropertyUiProps<RecognizingAuthorityPropertyInput> {}

export function SchemaPropertyRecognizingAuthority({ value: legacyValue, description = "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRecognizingAuthorityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RecognizingAuthorityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-recognizing-authority",
    shellClassName: "lander-semantic--schema-property-recognizing-authority",
    title: "recognizingAuthority",
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

(SchemaPropertyRecognizingAuthority as typeof SchemaPropertyRecognizingAuthority & { toStructuredData: (props: SchemaPropertyRecognizingAuthorityProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
