import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CompanyRegistrationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCompanyRegistrationProps extends CompanyRegistrationPropertyInput, GeneratedPropertyUiProps<CompanyRegistrationPropertyInput> {}

export function SchemaPropertyCompanyRegistration({ value: legacyValue, description = "The official registration information of a business including the organization that issued it such as Company House or Chamber of Commerce in form of a Certification.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCompanyRegistrationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CompanyRegistrationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-company-registration",
    shellClassName: "lander-semantic--schema-property-company-registration",
    title: "companyRegistration",
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

(SchemaPropertyCompanyRegistration as typeof SchemaPropertyCompanyRegistration & { toStructuredData: (props: SchemaPropertyCompanyRegistrationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
