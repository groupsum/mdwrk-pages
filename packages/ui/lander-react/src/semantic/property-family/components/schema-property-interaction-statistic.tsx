import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInteractionStatisticProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInteractionStatistic({ value, description = "The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInteractionStatisticProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InteractionStatisticPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-interaction-statistic",
    shellClassName: "lander-semantic--schema-property-interaction-statistic",
    title: "interactionStatistic",
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
