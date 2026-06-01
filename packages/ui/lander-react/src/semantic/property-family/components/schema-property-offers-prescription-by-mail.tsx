import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { OffersPrescriptionByMailPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOffersPrescriptionByMailProps extends OffersPrescriptionByMailPropertyInput, GeneratedPropertyUiProps<OffersPrescriptionByMailPropertyInput> {}

export function SchemaPropertyOffersPrescriptionByMail({ value: legacyValue, description = "Whether prescriptions can be delivered by mail.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyOffersPrescriptionByMailProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OffersPrescriptionByMailPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-offers-prescription-by-mail",
    shellClassName: "lander-semantic--schema-property-offers-prescription-by-mail",
    title: "offersPrescriptionByMail",
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
