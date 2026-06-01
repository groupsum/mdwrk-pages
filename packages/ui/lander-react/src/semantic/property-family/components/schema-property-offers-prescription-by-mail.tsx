import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOffersPrescriptionByMailProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyOffersPrescriptionByMail({ value, description = "Whether prescriptions can be delivered by mail.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyOffersPrescriptionByMailProps) {
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
