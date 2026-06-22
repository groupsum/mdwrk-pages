import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MembershipPointsEarnedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMembershipPointsEarnedProps extends MembershipPointsEarnedPropertyInput, GeneratedPropertyUiProps<MembershipPointsEarnedPropertyInput> {}

export function SchemaPropertyMembershipPointsEarned({ value: legacyValue, description = "The number of membership points earned by the member. If necessary, the unitText can be used to express the units the points are issued in. (E.g. stars, miles, etc.)", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMembershipPointsEarnedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MembershipPointsEarnedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-membership-points-earned",
    shellClassName: "lander-semantic--schema-property-membership-points-earned",
    title: "membershipPointsEarned",
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

(SchemaPropertyMembershipPointsEarned as typeof SchemaPropertyMembershipPointsEarned & { toStructuredData: (props: SchemaPropertyMembershipPointsEarnedProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
