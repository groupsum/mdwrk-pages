import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface PaymentMethodTypeProps extends GeneratedEnumerationProps<string> {}

export function PaymentMethodType({ value, description = "The type of payment method, only for generic payment types, specific forms of payments, like card payment should be expressed using subclasses of PaymentMethod.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: PaymentMethodTypeProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.PaymentMethodTypeStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-payment-method-type",
    shellClassName: "lander-semantic--schema-enumeration-payment-method-type",
    title: "PaymentMethodType",
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

(PaymentMethodType as typeof PaymentMethodType & { toStructuredData: (props: PaymentMethodTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
