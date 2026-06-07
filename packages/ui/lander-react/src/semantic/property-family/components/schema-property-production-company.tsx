import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProductionCompanyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProductionCompanyProps extends ProductionCompanyPropertyInput, GeneratedPropertyUiProps<ProductionCompanyPropertyInput> {}

export function SchemaPropertyProductionCompany({ value: legacyValue, description = "The production company or studio responsible for the item, e.g. series, video game, episode etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProductionCompanyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProductionCompanyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-production-company",
    shellClassName: "lander-semantic--schema-property-production-company",
    title: "productionCompany",
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

(SchemaPropertyProductionCompany as typeof SchemaPropertyProductionCompany & { toStructuredData: (props: SchemaPropertyProductionCompanyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
