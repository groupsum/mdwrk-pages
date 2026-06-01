import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ConditionsOfAccessPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyConditionsOfAccessProps extends ConditionsOfAccessPropertyInput, GeneratedPropertyUiProps<ConditionsOfAccessPropertyInput> {}

export function SchemaPropertyConditionsOfAccess({ value: legacyValue, description = "Conditions that affect the availability of, or method(s) of access to, an item. Typically used for real world items such as an [[ArchiveComponent]] held by an [[ArchiveOrganization]]. This property is not suitable for use as a general Web access control mechanism. It is expressed only in natural language.\\n\\nFor example \"Available by appointment from the Reading Room\" or \"Accessible only from logged-in accounts \". ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyConditionsOfAccessProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ConditionsOfAccessPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-conditions-of-access",
    shellClassName: "lander-semantic--schema-property-conditions-of-access",
    title: "conditionsOfAccess",
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
