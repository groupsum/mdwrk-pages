import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContactlessPaymentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContactlessPayment({ value, description = "A secure method for consumers to purchase products or services via debit, credit or smartcards by using RFID or NFC technology.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContactlessPaymentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContactlessPaymentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contactless-payment",
    shellClassName: "lander-semantic--schema-property-contactless-payment",
    title: "contactlessPayment",
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
