import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRecourseLoanProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRecourseLoan({ value, description = "The only way you get the money back in the event of default is the security. Recourse is where you still have the opportunity to go back to the borrower for the rest of the money.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRecourseLoanProps) {
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
