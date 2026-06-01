import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEarlyPrepaymentPenaltyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEarlyPrepaymentPenalty({ value, description = "The amount to be paid as a penalty in the event of early payment of the loan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEarlyPrepaymentPenaltyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EarlyPrepaymentPenaltyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-early-prepayment-penalty",
    shellClassName: "lander-semantic--schema-property-early-prepayment-penalty",
    title: "earlyPrepaymentPenalty",
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
