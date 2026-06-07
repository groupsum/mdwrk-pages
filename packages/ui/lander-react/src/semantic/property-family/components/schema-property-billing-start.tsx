import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BillingStartPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBillingStartProps extends BillingStartPropertyInput, GeneratedPropertyUiProps<BillingStartPropertyInput> {}

export function SchemaPropertyBillingStart({ value: legacyValue, description = "Specifies after how much time this price (or price component) becomes valid and billing starts. Can be used, for example, to model a price increase after the first year of a subscription. The unit of measurement is specified by the unitCode property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBillingStartProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BillingStartPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-billing-start",
    shellClassName: "lander-semantic--schema-property-billing-start",
    title: "billingStart",
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

(SchemaPropertyBillingStart as typeof SchemaPropertyBillingStart & { toStructuredData: (props: SchemaPropertyBillingStartProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
