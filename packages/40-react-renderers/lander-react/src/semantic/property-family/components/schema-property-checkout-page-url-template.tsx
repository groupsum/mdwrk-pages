import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CheckoutPageURLTemplatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCheckoutPageURLTemplateProps extends CheckoutPageURLTemplatePropertyInput, GeneratedPropertyUiProps<CheckoutPageURLTemplatePropertyInput> {}

export function SchemaPropertyCheckoutPageURLTemplate({ value: legacyValue, description = "A URL template (RFC 6570) for a checkout page for an offer. This approach allows merchants to specify a URL for online checkout of the offered product, by interpolating parameters such as the logged in user ID, product ID, quantity, discount code etc. Parameter naming and standardization are not specified here.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCheckoutPageURLTemplateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyCheckoutPageURLTemplate as typeof SchemaPropertyCheckoutPageURLTemplate & { toStructuredData: (props: SchemaPropertyCheckoutPageURLTemplateProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
