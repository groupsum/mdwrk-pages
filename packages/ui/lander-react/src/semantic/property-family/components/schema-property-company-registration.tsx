import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCompanyRegistrationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCompanyRegistration({ value, description = "The official registration information of a business including the organization that issued it such as Company House or Chamber of Commerce in form of a Certification.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCompanyRegistrationProps) {
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
