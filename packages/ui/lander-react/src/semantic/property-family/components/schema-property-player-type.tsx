import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPlayerTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPlayerType({ value, description = "Player type required&#x2014;for example, Flash or Silverlight.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPlayerTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PlayerTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-player-type",
    shellClassName: "lander-semantic--schema-property-player-type",
    title: "playerType",
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
