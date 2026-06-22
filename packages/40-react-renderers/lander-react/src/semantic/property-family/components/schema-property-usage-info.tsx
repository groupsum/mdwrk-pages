import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { UsageInfoPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUsageInfoProps extends UsageInfoPropertyInput, GeneratedPropertyUiProps<UsageInfoPropertyInput> {}

export function SchemaPropertyUsageInfo({ value: legacyValue, description = "The schema.org [[usageInfo]] property indicates further information about a [[CreativeWork]]. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information, e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.\n\nThis property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyUsageInfoProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UsageInfoPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-usage-info",
    shellClassName: "lander-semantic--schema-property-usage-info",
    title: "usageInfo",
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

(SchemaPropertyUsageInfo as typeof SchemaPropertyUsageInfo & { toStructuredData: (props: SchemaPropertyUsageInfoProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
