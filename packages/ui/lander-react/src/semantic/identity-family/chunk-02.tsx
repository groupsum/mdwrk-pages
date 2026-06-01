import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList, renderJsonPreview, thingReference } from "../shared.js";

type ProfilePageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ProfilePageStructuredData>["data"];
type OrganizationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.OrganizationStructuredData>["data"];
type EducationalOrganizationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EducationalOrganizationStructuredData>["data"];
type LocalBusinessStructuredDataInput = React.ComponentProps<typeof structuredDataReact.LocalBusinessStructuredData>["data"];
type MemberProgramStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MemberProgramStructuredData>["data"];
type MemberProgramTierStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MemberProgramTierStructuredData>["data"];
type WebPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.WebPageStructuredData>["data"];
type WebSiteStructuredDataInput = React.ComponentProps<typeof structuredDataReact.WebSiteStructuredData>["data"];
type BreadcrumbListStructuredDataInput = React.ComponentProps<typeof structuredDataReact.BreadcrumbListStructuredData>["data"];
type SpeakableSpecificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.SpeakableSpecificationStructuredData>["data"];

export interface OrganizationProps {
  name: string;
  description?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<OrganizationStructuredDataInput>;
}

export interface LocalBusinessProps extends OrganizationProps {
  address?: string;
  telephone?: string;
  priceRange?: string;
  openingHours?: string | string[];
  structuredDataOverrides?: Partial<LocalBusinessStructuredDataInput>;
}

export function LocalBusiness(props: LocalBusinessProps) {
  const base: LocalBusinessStructuredDataInput = {
    name: props.name,
    description: props.description,
    url: props.url,
    logo: props.logo,
    sameAs: props.sameAs,
    address: props.address,
    telephone: props.telephone,
    priceRange: props.priceRange,
    openingHours: props.openingHours,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.LocalBusinessStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="local-business"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Local business"}
        description={props.description}
        imageSrc={props.logo}
        imageAlt={props.name}
        meta={[
          props.address ? { label: "Address", value: props.address } : null,
          props.telephone ? { label: "Telephone", value: props.telephone } : null,
          props.priceRange ? { label: "Price range", value: props.priceRange } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {Array.isArray(props.openingHours) ? (
              <div className="lander-semantic__hours-card">
                <span className="lander-semantic__hours-label">Hours</span>
                <ul className="lander-semantic__hours-list">
                  {props.openingHours.map((hours) => (
                    <li key={hours}>{hours}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {typeof props.openingHours === "string" ? (
              <div className="lander-semantic__hours-card">
                <span className="lander-semantic__hours-label">Hours</span>
                <p className="lander-semantic__hours-copy">{props.openingHours}</p>
              </div>
            ) : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface MemberProgramProps {
  name: string;
  description?: string;
  provider?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MemberProgramStructuredDataInput>;
}

export function MemberProgram(props: MemberProgramProps) {
  const base: MemberProgramStructuredDataInput = {
    name: props.name,
    description: props.description,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MemberProgramStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="member-program"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Member program"}
        description={props.description}
        body={
          <>
            {props.provider ? (
              <div className="lander-semantic__member-provider">
                <span className="lander-semantic__member-provider-label">Provider</span>
                <strong className="lander-semantic__member-provider-value">{props.provider}</strong>
              </div>
            ) : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface MemberProgramTierProps {
  name: string;
  description?: string;
  hasTierBenefit?: string[];
  membershipPointsEarned?: number | string;
  membershipPointsRequired?: number | string;
  validFrom?: string;
  validThrough?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MemberProgramTierStructuredDataInput>;
}

export function MemberProgramTier(props: MemberProgramTierProps) {
  const base: MemberProgramTierStructuredDataInput = {
    name: props.name,
    description: props.description,
    validFrom: props.validFrom,
    validThrough: props.validThrough,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MemberProgramTierStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="member-program-tier"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Member program tier"}
        description={props.description}
        meta={[
          props.membershipPointsEarned !== undefined ? { label: "Points earned", value: String(props.membershipPointsEarned) } : null,
          props.membershipPointsRequired !== undefined ? { label: "Points required", value: String(props.membershipPointsRequired) } : null,
          props.validFrom ? { label: "Valid from", value: props.validFrom } : null,
          props.validThrough ? { label: "Valid through", value: props.validThrough } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.hasTierBenefit?.length ? <div className="lander-semantic__member-tier-benefits">{bodyList(props.hasTierBenefit)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
