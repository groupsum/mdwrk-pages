import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface OfferItemConditionProps extends GeneratedEnumerationProps<string> {}

export function OfferItemCondition({ value, description = "A list of possible conditions for the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: OfferItemConditionProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.OfferItemConditionStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-offer-item-condition",
    shellClassName: "lander-semantic--schema-enumeration-offer-item-condition",
    title: "OfferItemCondition",
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

(OfferItemCondition as typeof OfferItemCondition & { toStructuredData: (props: OfferItemConditionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
