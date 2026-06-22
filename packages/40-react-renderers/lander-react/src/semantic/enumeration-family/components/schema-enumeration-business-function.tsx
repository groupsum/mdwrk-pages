import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface BusinessFunctionProps extends GeneratedEnumerationProps<string> {}

export function BusinessFunction({ value, description = "The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.\\n\\nCommonly used values:\\n\\n* http://purl.org/goodrelations/v1#ConstructionInstallation\\n* http://purl.org/goodrelations/v1#Dispose\\n* http://purl.org/goodrelations/v1#LeaseOut\\n* http://purl.org/goodrelations/v1#Maintain\\n* http://purl.org/goodrelations/v1#ProvideService\\n* http://purl.org/goodrelations/v1#Repair\\n* http://purl.org/goodrelations/v1#Sell\\n* http://purl.org/goodrelations/v1#Buy\n        ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: BusinessFunctionProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.BusinessFunctionStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-business-function",
    shellClassName: "lander-semantic--schema-enumeration-business-function",
    title: "BusinessFunction",
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

(BusinessFunction as typeof BusinessFunction & { toStructuredData: (props: BusinessFunctionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
