import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface PriceTypeEnumerationProps extends GeneratedEnumerationProps<string> {}

export function PriceTypeEnumeration({ value, description = "Enumerates different price types, for example list price, invoice price, and sale price.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: PriceTypeEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.PriceTypeEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-price-type-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-price-type-enumeration",
    title: "PriceTypeEnumeration",
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

(PriceTypeEnumeration as typeof PriceTypeEnumeration & { toStructuredData: (props: PriceTypeEnumerationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
