import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PostalAddressInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, buildGeneratedTypeStructuredData, renderGeneratedTypeCard } from "../shared.js";

export interface PostalAddressProps extends PostalAddressInput, GeneratedTypeUiProps<PostalAddressInput> {}

export function PostalAddress({ value: legacyValue, description = "The mailing address.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: PostalAddressProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.PostalAddressStructuredData,
    defaultEyebrow: "Type",
    kind: "postal-address",
    shellClassName: "lander-semantic--postal-address",
    title: "PostalAddress",
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

(PostalAddress as typeof PostalAddress & { toStructuredData: (props: PostalAddressProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedTypeStructuredData(props);
