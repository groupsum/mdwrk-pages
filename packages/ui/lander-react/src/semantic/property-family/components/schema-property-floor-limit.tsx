import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFloorLimitProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFloorLimit({ value, description = "A floor limit is the amount of money above which credit card transactions must be authorized.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFloorLimitProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FloorLimitPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-floor-limit",
    shellClassName: "lander-semantic--schema-property-floor-limit",
    title: "floorLimit",
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
