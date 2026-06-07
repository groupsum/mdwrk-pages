import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface ItemListOrderTypeProps extends GeneratedEnumerationProps<string> {}

export function ItemListOrderType({ value, description = "Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: ItemListOrderTypeProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.ItemListOrderTypeStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-item-list-order-type",
    shellClassName: "lander-semantic--schema-enumeration-item-list-order-type",
    title: "ItemListOrderType",
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

(ItemListOrderType as typeof ItemListOrderType & { toStructuredData: (props: ItemListOrderTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
