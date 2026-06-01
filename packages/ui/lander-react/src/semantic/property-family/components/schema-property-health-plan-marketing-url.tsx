import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanMarketingUrlProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHealthPlanMarketingUrl({ value, description = "The URL that goes directly to the plan brochure for the specific standard plan or plan variation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHealthPlanMarketingUrlProps) {
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
