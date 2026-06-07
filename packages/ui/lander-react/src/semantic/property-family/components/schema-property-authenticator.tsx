import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AuthenticatorPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAuthenticatorProps extends AuthenticatorPropertyInput, GeneratedPropertyUiProps<AuthenticatorPropertyInput> {}

export function SchemaPropertyAuthenticator({ value: legacyValue, description = "The Organization responsible for authenticating the user's subscription. For example, many media apps require a cable/satellite provider to authenticate your subscription before playing media.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAuthenticatorProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyAuthenticator as typeof SchemaPropertyAuthenticator & { toStructuredData: (props: SchemaPropertyAuthenticatorProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
