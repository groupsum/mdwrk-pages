import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface MapCategoryTypeProps extends GeneratedEnumerationProps<string> {}

export function MapCategoryType({ value, description = "An enumeration of several kinds of Map.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: MapCategoryTypeProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.MapCategoryTypeStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-map-category-type",
    shellClassName: "lander-semantic--schema-enumeration-map-category-type",
    title: "MapCategoryType",
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

(MapCategoryType as typeof MapCategoryType & { toStructuredData: (props: MapCategoryTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
