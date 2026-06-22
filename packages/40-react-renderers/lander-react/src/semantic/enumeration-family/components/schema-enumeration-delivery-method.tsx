import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface DeliveryMethodProps extends GeneratedEnumerationProps<string> {}

export function DeliveryMethod({ value, description = "A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person.\\n\\nCommonly used values:\\n\\n* http://purl.org/goodrelations/v1#DeliveryModeDirectDownload\\n* http://purl.org/goodrelations/v1#DeliveryModeFreight\\n* http://purl.org/goodrelations/v1#DeliveryModeMail\\n* http://purl.org/goodrelations/v1#DeliveryModeOwnFleet\\n* http://purl.org/goodrelations/v1#DeliveryModePickUp\\n* http://purl.org/goodrelations/v1#DHL\\n* http://purl.org/goodrelations/v1#FederalExpress\\n* http://purl.org/goodrelations/v1#UPS\n        ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: DeliveryMethodProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.DeliveryMethodStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-delivery-method",
    shellClassName: "lander-semantic--schema-enumeration-delivery-method",
    title: "DeliveryMethod",
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

(DeliveryMethod as typeof DeliveryMethod & { toStructuredData: (props: DeliveryMethodProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
