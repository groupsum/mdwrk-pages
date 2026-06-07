import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MaintainerPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaintainerProps extends MaintainerPropertyInput, GeneratedPropertyUiProps<MaintainerPropertyInput> {}

export function SchemaPropertyMaintainer({ value: legacyValue, description = "A maintainer of a [[Dataset]], software package ([[SoftwareApplication]]), or other [[Project]]. A maintainer is a [[Person]] or [[Organization]] that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on \"upstream\" sources. When [[maintainer]] is applied to a specific version of something e.g. a particular version or packaging of a [[Dataset]], it is always  possible that the upstream source has a different maintainer. The [[isBasedOn]] property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work.\n      ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMaintainerProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MaintainerPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-maintainer",
    shellClassName: "lander-semantic--schema-property-maintainer",
    title: "maintainer",
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

(SchemaPropertyMaintainer as typeof SchemaPropertyMaintainer & { toStructuredData: (props: SchemaPropertyMaintainerProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
