import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import {
  SemanticShell,
  SemanticStructuredDataGate,
  bodyList,
  creativeWorkReference,
  thingReference,
} from "../shared.js";

type BrandStructuredDataInput = React.ComponentProps<typeof structuredDataReact.BrandStructuredData>["data"];
type CertificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CertificationStructuredData>["data"];
type ClaimStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ClaimStructuredData>["data"];
type CommentStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CommentStructuredData>["data"];
type ContactPointStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ContactPointStructuredData>["data"];
type CorrectionCommentStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CorrectionCommentStructuredData>["data"];
type CountryStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CountryStructuredData>["data"];
type CreativeWorkStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CreativeWorkStructuredData>["data"];
type CreativeWorkSeasonStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CreativeWorkSeasonStructuredData>["data"];
type CreativeWorkSeriesStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CreativeWorkSeriesStructuredData>["data"];
type EpisodeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EpisodeStructuredData>["data"];
type FinancialProductStructuredDataInput = React.ComponentProps<typeof structuredDataReact.FinancialProductStructuredData>["data"];
type LoanOrCreditStructuredDataInput = React.ComponentProps<typeof structuredDataReact.LoanOrCreditStructuredData>["data"];
type GeneStructuredDataInput = React.ComponentProps<typeof structuredDataReact.GeneStructuredData>["data"];
type GrantStructuredDataInput = React.ComponentProps<typeof structuredDataReact.GrantStructuredData>["data"];
type HyperTocEntryStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HyperTocEntryStructuredData>["data"];
type MapStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MapStructuredData>["data"];
type OccupationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.OccupationStructuredData>["data"];
type OccupationalExperienceRequirementsStructuredDataInput = React.ComponentProps<typeof structuredDataReact.OccupationalExperienceRequirementsStructuredData>["data"];
type TextObjectStructuredDataInput = React.ComponentProps<typeof structuredDataReact.TextObjectStructuredData>["data"];

type NamedRef = { name: string; url?: string };

function ref(type: string, value?: NamedRef | string) {
  if (!value) return undefined;
  if (typeof value === "string") return { "@type": type, name: value };
  return { "@type": type, name: value.name, url: value.url };
}

export interface LoanOrCreditProps {
  name: string;
  description?: string;
  annualPercentageRate?: number | string;
  interestRate?: number | string;
  amount?: number | string;
  loanTerm?: string;
  requiredCollateral?: string;
  provider?: NamedRef | string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<LoanOrCreditStructuredDataInput>;
}

export function LoanOrCredit(props: LoanOrCreditProps) {
  const base: LoanOrCreditStructuredDataInput = {
    name: props.name,
    description: props.description,
    annualPercentageRate: props.annualPercentageRate,
    interestRate: props.interestRate,
    amount: props.amount,
    loanTerm: props.loanTerm,
    requiredCollateral: props.requiredCollateral,
    provider: ref("Organization", props.provider),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.LoanOrCreditStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="loan-or-credit"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Loan or credit"}
        description={props.description}
        meta={[
          props.amount ? { label: "Amount", value: String(props.amount) } : null,
          props.loanTerm ? { label: "Term", value: props.loanTerm } : null,
          props.annualPercentageRate ? { label: "APR", value: String(props.annualPercentageRate) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={<>{props.requiredCollateral ? <p>{props.requiredCollateral}</p> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface GeneProps {
  name: string;
  description?: string;
  hasBioPolymerSequence?: string;
  associatedDisease?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<GeneStructuredDataInput>;
}

export function Gene(props: GeneProps) {
  const base: GeneStructuredDataInput = {
    name: props.name,
    description: props.description,
    hasBioPolymerSequence: props.hasBioPolymerSequence,
    associatedDisease: props.associatedDisease?.map((entry) => ({ "@type": "MedicalCondition", name: entry })),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.GeneStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="gene"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Gene"}
        description={props.description}
        body={
          <>
            {props.hasBioPolymerSequence ? <p>{props.hasBioPolymerSequence}</p> : null}
            {props.associatedDisease?.length ? <div className="lander-semantic__creative-work-audience">{bodyList(props.associatedDisease)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface GrantProps {
  name: string;
  description?: string;
  fundedItem?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<GrantStructuredDataInput>;
}

export function Grant(props: GrantProps) {
  const base: GrantStructuredDataInput = {
    name: props.name,
    description: props.description,
    fundedItem: props.fundedItem?.map((entry) => creativeWorkReference(entry)),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.GrantStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="grant"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Grant"}
        description={props.description}
        body={
          <>
            {props.fundedItem?.length ? <div className="lander-semantic__data-catalog-datasets">{bodyList(props.fundedItem)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
