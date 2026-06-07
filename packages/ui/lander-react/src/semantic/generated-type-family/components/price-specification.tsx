import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PriceSpecificationInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, buildGeneratedTypeStructuredData, renderGeneratedTypeCard } from "../shared.js";

export interface PriceSpecificationProps extends PriceSpecificationInput, GeneratedTypeUiProps<PriceSpecificationInput> {}

export function PriceSpecification({ value: legacyValue, description = "A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use [[MonetaryAmount]] to describe independent amounts of money such as a salary, credit card limits, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: PriceSpecificationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.PriceSpecificationStructuredData,
    defaultEyebrow: "Type",
    kind: "price-specification",
    shellClassName: "lander-semantic--price-specification",
    title: "PriceSpecification",
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

(PriceSpecification as typeof PriceSpecification & { toStructuredData: (props: PriceSpecificationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedTypeStructuredData(props);
