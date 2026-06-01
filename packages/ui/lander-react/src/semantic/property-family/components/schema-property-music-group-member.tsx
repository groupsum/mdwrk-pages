import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MusicGroupMemberPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMusicGroupMemberProps extends MusicGroupMemberPropertyInput, GeneratedPropertyUiProps<MusicGroupMemberPropertyInput> {}

export function SchemaPropertyMusicGroupMember({ value: legacyValue, description = "A member of a music group&#x2014;for example, John, Paul, George, or Ringo.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMusicGroupMemberProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MusicGroupMemberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-music-group-member",
    shellClassName: "lander-semantic--schema-property-music-group-member",
    title: "musicGroupMember",
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
