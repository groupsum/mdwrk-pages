import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface ItemAvailabilityProps extends GeneratedEnumerationProps<string> {}

export function ItemAvailability({ value, description = "A list of possible product availability options.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: ItemAvailabilityProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.ItemAvailabilityStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-item-availability",
    shellClassName: "lander-semantic--schema-enumeration-item-availability",
    title: "ItemAvailability",
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

(ItemAvailability as typeof ItemAvailability & { toStructuredData: (props: ItemAvailabilityProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
