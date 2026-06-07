import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InteractionStatisticPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInteractionStatisticProps extends InteractionStatisticPropertyInput, GeneratedPropertyUiProps<InteractionStatisticPropertyInput> {}

export function SchemaPropertyInteractionStatistic({ value: legacyValue, description = "The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInteractionStatisticProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyInteractionStatistic as typeof SchemaPropertyInteractionStatistic & { toStructuredData: (props: SchemaPropertyInteractionStatisticProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
