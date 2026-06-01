import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCheckoutPageURLTemplateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCheckoutPageURLTemplate({ value, description = "A URL template (RFC 6570) for a checkout page for an offer. This approach allows merchants to specify a URL for online checkout of the offered product, by interpolating parameters such as the logged in user ID, product ID, quantity, discount code etc. Parameter naming and standardization are not specified here.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCheckoutPageURLTemplateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CheckoutPageURLTemplatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-checkout-page-url-template",
    shellClassName: "lander-semantic--schema-property-checkout-page-url-template",
    title: "checkoutPageURLTemplate",
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
