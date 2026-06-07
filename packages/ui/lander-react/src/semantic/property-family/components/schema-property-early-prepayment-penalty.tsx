import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EarlyPrepaymentPenaltyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEarlyPrepaymentPenaltyProps extends EarlyPrepaymentPenaltyPropertyInput, GeneratedPropertyUiProps<EarlyPrepaymentPenaltyPropertyInput> {}

export function SchemaPropertyEarlyPrepaymentPenalty({ value: legacyValue, description = "The amount to be paid as a penalty in the event of early payment of the loan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEarlyPrepaymentPenaltyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyEarlyPrepaymentPenalty as typeof SchemaPropertyEarlyPrepaymentPenalty & { toStructuredData: (props: SchemaPropertyEarlyPrepaymentPenaltyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
