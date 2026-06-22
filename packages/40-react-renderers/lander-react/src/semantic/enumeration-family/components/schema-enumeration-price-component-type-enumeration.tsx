import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface PriceComponentTypeEnumerationProps extends GeneratedEnumerationProps<string> {}

export function PriceComponentTypeEnumeration({ value, description = "Enumerates different price components that together make up the total price for an offered product.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: PriceComponentTypeEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.PriceComponentTypeEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-price-component-type-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-price-component-type-enumeration",
    title: "PriceComponentTypeEnumeration",
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

(PriceComponentTypeEnumeration as typeof PriceComponentTypeEnumeration & { toStructuredData: (props: PriceComponentTypeEnumerationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
