import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HealthPlanMarketingUrlPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanMarketingUrlProps extends HealthPlanMarketingUrlPropertyInput, GeneratedPropertyUiProps<HealthPlanMarketingUrlPropertyInput> {}

export function SchemaPropertyHealthPlanMarketingUrl({ value: legacyValue, description = "The URL that goes directly to the plan brochure for the specific standard plan or plan variation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHealthPlanMarketingUrlProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanMarketingUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-marketing-url",
    shellClassName: "lander-semantic--schema-property-health-plan-marketing-url",
    title: "healthPlanMarketingUrl",
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

(SchemaPropertyHealthPlanMarketingUrl as typeof SchemaPropertyHealthPlanMarketingUrl & { toStructuredData: (props: SchemaPropertyHealthPlanMarketingUrlProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
