import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContactlessPaymentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContactlessPaymentProps extends ContactlessPaymentPropertyInput, GeneratedPropertyUiProps<ContactlessPaymentPropertyInput> {}

export function SchemaPropertyContactlessPayment({ value: legacyValue, description = "A secure method for consumers to purchase products or services via debit, credit or smartcards by using RFID or NFC technology.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContactlessPaymentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyContactlessPayment as typeof SchemaPropertyContactlessPayment & { toStructuredData: (props: SchemaPropertyContactlessPaymentProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
