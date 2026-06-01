import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAuthenticatorProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAuthenticator({ value, description = "The Organization responsible for authenticating the user's subscription. For example, many media apps require a cable/satellite provider to authenticate your subscription before playing media.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAuthenticatorProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AuthenticatorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-authenticator",
    shellClassName: "lander-semantic--schema-property-authenticator",
    title: "authenticator",
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
