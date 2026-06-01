import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMembershipPointsEarnedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMembershipPointsEarned({ value, description = "The number of membership points earned by the member. If necessary, the unitText can be used to express the units the points are issued in. (E.g. stars, miles, etc.)", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMembershipPointsEarnedProps) {
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
