import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface BusinessEntityTypeProps extends GeneratedEnumerationProps<string> {}

export function BusinessEntityType({ value, description = "A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.\\n\\nCommonly used values:\\n\\n* http://purl.org/goodrelations/v1#Business\\n* http://purl.org/goodrelations/v1#Enduser\\n* http://purl.org/goodrelations/v1#PublicInstitution\\n* http://purl.org/goodrelations/v1#Reseller\n    ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: BusinessEntityTypeProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.BusinessEntityTypeStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-business-entity-type",
    shellClassName: "lander-semantic--schema-enumeration-business-entity-type",
    title: "BusinessEntityType",
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
