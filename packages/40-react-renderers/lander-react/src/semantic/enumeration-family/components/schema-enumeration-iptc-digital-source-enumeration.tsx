import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface IPTCDigitalSourceEnumerationProps extends GeneratedEnumerationProps<string> {}

export function IPTCDigitalSourceEnumeration({ value, description = "<a href=\"https://www.iptc.org/\">IPTC</a> \"Digital Source\" codes for use with the [[digitalSourceType]] property, providing information about the source for a digital media object.\nIn general these codes are not declared here to be mutually exclusive, although some combinations would be contradictory if applied simultaneously, or might be considered mutually incompatible by upstream maintainers of the definitions. See the IPTC <a href=\"https://www.iptc.org/std/photometadata/documentation/userguide/\">documentation</a>\n for <a href=\"https://cv.iptc.org/newscodes/digitalsourcetype/\">detailed definitions</a> of all terms.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: IPTCDigitalSourceEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.IPTCDigitalSourceEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-iptc-digital-source-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-iptc-digital-source-enumeration",
    title: "IPTCDigitalSourceEnumeration",
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

(IPTCDigitalSourceEnumeration as typeof IPTCDigitalSourceEnumeration & { toStructuredData: (props: IPTCDigitalSourceEnumerationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
