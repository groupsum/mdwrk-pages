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

export interface BrandProps {
  name: string;
  description?: string;
  slogan?: string;
  logo?: string;
  reviews?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<BrandStructuredDataInput>;
}

export function Brand(props: BrandProps) {
  const base: BrandStructuredDataInput = {
    name: props.name,
    description: props.description,
    slogan: props.slogan,
    logo: props.logo,
    review: props.reviews?.map((entry) => ({ "@type": "Review", name: entry })),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.BrandStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="brand"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Brand"}
        description={props.description}
        imageSrc={props.logo}
        meta={props.slogan ? [{ label: "Slogan", value: props.slogan }] : undefined}
        body={
          <>
            {props.reviews?.length ? <div className="lander-semantic__brand-reviews">{bodyList(props.reviews)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface CertificationProps {
  name: string;
  description?: string;
  certificationIdentification?: string;
  certificationStatus?: string;
  certificationRating?: string;
  issuedBy?: NamedRef | string;
  validFrom?: string;
  validIn?: NamedRef | string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CertificationStructuredDataInput>;
}

export function Certification(props: CertificationProps) {
  const base: CertificationStructuredDataInput = {
    name: props.name,
    description: props.description,
    certificationIdentification: props.certificationIdentification,
    certificationStatus: props.certificationStatus,
    certificationRating: props.certificationRating,
    issuedBy: ref("Organization", props.issuedBy),
    validFrom: props.validFrom,
    validIn: ref("AdministrativeArea", props.validIn),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CertificationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="certification"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Certification"}
        description={props.description}
        meta={[
          props.certificationIdentification ? { label: "ID", value: props.certificationIdentification } : null,
          props.certificationStatus ? { label: "Status", value: props.certificationStatus } : null,
          props.certificationRating ? { label: "Rating", value: props.certificationRating } : null,
          props.validFrom ? { label: "Valid from", value: props.validFrom } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.issuedBy ? <p>Issued by {typeof props.issuedBy === "string" ? props.issuedBy : props.issuedBy.name}</p> : null}
            {props.validIn ? <p>Valid in {typeof props.validIn === "string" ? props.validIn : props.validIn.name}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface ClaimProps {
  name: string;
  description?: string;
  text?: string;
  claimInterpreter?: NamedRef | string;
  appearance?: string[];
  firstAppearance?: NamedRef | string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ClaimStructuredDataInput>;
}

export function Claim(props: ClaimProps) {
  const base: ClaimStructuredDataInput = {
    name: props.name,
    description: props.description,
    text: props.text,
    claimInterpreter: ref("Organization", props.claimInterpreter),
    appearance: props.appearance?.map((entry) => creativeWorkReference(entry)),
    firstAppearance: creativeWorkReference(props.firstAppearance),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ClaimStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="claim"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Claim"}
        description={props.description}
        meta={props.claimInterpreter ? [{ label: "Interpreter", value: typeof props.claimInterpreter === "string" ? props.claimInterpreter : props.claimInterpreter.name }] : undefined}
        body={
          <>
            {props.text ? <p>{props.text}</p> : null}
            {props.appearance?.length ? <div className="lander-semantic__claim-appearances">{bodyList(props.appearance)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
