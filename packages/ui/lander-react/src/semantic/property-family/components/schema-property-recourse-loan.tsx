import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RecourseLoanPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRecourseLoanProps extends RecourseLoanPropertyInput, GeneratedPropertyUiProps<RecourseLoanPropertyInput> {}

export function SchemaPropertyRecourseLoan({ value: legacyValue, description = "The only way you get the money back in the event of default is the security. Recourse is where you still have the opportunity to go back to the borrower for the rest of the money.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRecourseLoanProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RecourseLoanPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-recourse-loan",
    shellClassName: "lander-semantic--schema-property-recourse-loan",
    title: "recourseLoan",
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
