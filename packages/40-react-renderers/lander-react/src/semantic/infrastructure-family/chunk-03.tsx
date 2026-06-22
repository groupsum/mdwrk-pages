import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList } from "../shared.js";

type BroadcastChannelStructuredDataInput = React.ComponentProps<typeof structuredDataReact.BroadcastChannelStructuredData>["data"];
type BroadcastFrequencySpecificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.BroadcastFrequencySpecificationStructuredData>["data"];
type BroadcastServiceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.BroadcastServiceStructuredData>["data"];
type CableOrSatelliteServiceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CableOrSatelliteServiceStructuredData>["data"];
type CivicStructureStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CivicStructureStructuredData>["data"];
type ConstraintNodeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ConstraintNodeStructuredData>["data"];
type CreditCardStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CreditCardStructuredData>["data"];
type CssSelectorTypeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CssSelectorTypeStructuredData>["data"];
type DistanceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DistanceStructuredData>["data"];
type EntryPointStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EntryPointStructuredData>["data"];
type GeoCoordinatesStructuredDataInput = React.ComponentProps<typeof structuredDataReact.GeoCoordinatesStructuredData>["data"];
type GeospatialGeometryStructuredDataInput = React.ComponentProps<typeof structuredDataReact.GeospatialGeometryStructuredData>["data"];
type GeoShapeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.GeoShapeStructuredData>["data"];

type NamedRef = { name: string; url?: string };

function ref(type: string, value?: NamedRef | string) {
  if (!value) return undefined;
  if (typeof value === "string") return { "@type": type, name: value };
  return { "@type": type, name: value.name, url: value.url };
}

export interface CreditCardProps {
  name: string;
  description?: string;
  interestRate?: number | string;
  feesAndCommissionsSpecification?: string;
  monthlyMinimumRepaymentAmount?: string;
  cashBack?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CreditCardStructuredDataInput>;
}

export function CreditCard(props: CreditCardProps) {
  const base: CreditCardStructuredDataInput = {
    name: props.name,
    description: props.description,
    interestRate: props.interestRate,
    feesAndCommissionsSpecification: props.feesAndCommissionsSpecification,
    monthlyMinimumRepaymentAmount: ref("MonetaryAmount", props.monthlyMinimumRepaymentAmount),
    cashBack: ref("MonetaryAmount", props.cashBack),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CreditCardStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="credit-card"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Credit card"}
        description={props.description}
        meta={[
          props.interestRate !== undefined ? { label: "Interest rate", value: String(props.interestRate) } : null,
          props.monthlyMinimumRepaymentAmount ? { label: "Minimum repayment", value: props.monthlyMinimumRepaymentAmount } : null,
          props.cashBack ? { label: "Cash back", value: props.cashBack } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.feesAndCommissionsSpecification ? <p>{props.feesAndCommissionsSpecification}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface CssSelectorTypeProps {
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CssSelectorTypeStructuredDataInput>;
}

export function CssSelectorType(props: CssSelectorTypeProps) {
  const structuredData = { ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CssSelectorTypeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="css-selector-type"
        title={props.label ?? "CSS selector"}
        eyebrow={props.viewModel?.eyebrow ?? "CSS selector"}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface DistanceProps {
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DistanceStructuredDataInput>;
}

export function Distance(props: DistanceProps) {
  const structuredData = { ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DistanceStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="distance"
        title={props.label ?? "Distance"}
        eyebrow={props.viewModel?.eyebrow ?? "Distance"}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
