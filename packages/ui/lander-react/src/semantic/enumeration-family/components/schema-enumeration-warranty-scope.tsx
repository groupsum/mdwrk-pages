import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface WarrantyScopeProps extends GeneratedEnumerationProps<string> {}

export function WarrantyScope({ value, description = "A range of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.\\n\\nCommonly used values:\\n\\n* http://purl.org/goodrelations/v1#Labor-BringIn\\n* http://purl.org/goodrelations/v1#PartsAndLabor-BringIn\\n* http://purl.org/goodrelations/v1#PartsAndLabor-PickUp\n      ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: WarrantyScopeProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.WarrantyScopeStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-warranty-scope",
    shellClassName: "lander-semantic--schema-enumeration-warranty-scope",
    title: "WarrantyScope",
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

(WarrantyScope as typeof WarrantyScope & { toStructuredData: (props: WarrantyScopeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
