import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList, renderJsonPreview, thingReference } from "./shared.js";

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

export interface ProfilePageProps {
  name: string;
  description?: string;
  mainEntity: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ProfilePageStructuredDataInput>;
}

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

export interface EducationalOrganizationProps extends OrganizationProps {
  address?: string;
  structuredDataOverrides?: Partial<EducationalOrganizationStructuredDataInput>;
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

export interface WebPageProps {
  name: string;
  description?: string;
  url?: string;
  primaryType?: string;
  datePublished?: string;
  dateModified?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<WebPageStructuredDataInput>;
}

export interface WebSiteProps {
  name: string;
  description?: string;
  url?: string;
  publisher?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<WebSiteStructuredDataInput>;
}

export interface BreadcrumbListProps {
  items: Array<{ label: string; href?: string }>;
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<BreadcrumbListStructuredDataInput>;
}

export interface SpeakableSpecificationProps {
  cssSelector?: string[];
  xpath?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<SpeakableSpecificationStructuredDataInput>;
}

export function ProfilePage(props: ProfilePageProps) {
  const base: ProfilePageStructuredDataInput = {
    name: props.name,
    description: props.description,
    mainEntity: thingReference(props.mainEntity),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ProfilePageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="profile-page"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Profile"}
        description={props.description}
        body={
          <>
            <div className="lander-semantic__profile-summary">
              <span className="lander-semantic__profile-label">Main entity</span>
              <strong className="lander-semantic__profile-entity">{props.mainEntity}</strong>
            </div>
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function Organization(props: OrganizationProps) {
  const base: OrganizationStructuredDataInput = {
    name: props.name,
    description: props.description,
    url: props.url,
    logo: props.logo,
    sameAs: props.sameAs,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.OrganizationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="organization"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Organization"}
        description={props.description}
        imageSrc={props.logo}
        imageAlt={props.name}
        body={
          <>
            {props.sameAs?.length ? (
              <ul className="lander-semantic__network-list">
                {props.sameAs.map((link) => (
                  <li key={link} className="lander-semantic__network-item">
                    <a className="lander-semantic__network-chip" href={link}>
                      {link.replace(/^https?:\/\//, "")}
                    </a>
                  </li>
                ))}
              </ul>
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

export function EducationalOrganization(props: EducationalOrganizationProps) {
  const base: EducationalOrganizationStructuredDataInput = {
    name: props.name,
    description: props.description,
    url: props.url,
    logo: props.logo,
    sameAs: props.sameAs,
    address: props.address,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.EducationalOrganizationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="educational-organization"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Educational organization"}
        description={props.description}
        imageSrc={props.logo}
        imageAlt={props.name}
        meta={[props.address ? { label: "Address", value: props.address } : null].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.sameAs?.length ? (
              <ul className="lander-semantic__network-list">
                {props.sameAs.map((link) => (
                  <li key={link} className="lander-semantic__network-item">
                    <a className="lander-semantic__network-chip" href={link}>
                      {link.replace(/^https?:\/\//, "")}
                    </a>
                  </li>
                ))}
              </ul>
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

export function WebPage(props: WebPageProps) {
  const base: WebPageStructuredDataInput = {
    name: props.name,
    description: props.description,
    url: props.url,
    primaryType: props.primaryType,
    datePublished: props.datePublished,
    dateModified: props.dateModified,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.WebPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="web-page"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Web page"}
        description={props.description}
        meta={[
          props.primaryType ? { label: "Primary type", value: props.primaryType } : null,
          props.datePublished ? { label: "Published", value: props.datePublished } : null,
          props.dateModified ? { label: "Updated", value: props.dateModified } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {(props.primaryType || props.datePublished || props.dateModified) ? (
              <div className="lander-semantic__page-facts">
                {props.primaryType ? (
                  <div className="lander-semantic__page-fact">
                    <span className="lander-semantic__page-fact-label">Primary type</span>
                    <strong className="lander-semantic__page-fact-value">{props.primaryType}</strong>
                  </div>
                ) : null}
                {props.datePublished ? (
                  <div className="lander-semantic__page-fact">
                    <span className="lander-semantic__page-fact-label">Published</span>
                    <strong className="lander-semantic__page-fact-value">{props.datePublished}</strong>
                  </div>
                ) : null}
                {props.dateModified ? (
                  <div className="lander-semantic__page-fact">
                    <span className="lander-semantic__page-fact-label">Updated</span>
                    <strong className="lander-semantic__page-fact-value">{props.dateModified}</strong>
                  </div>
                ) : null}
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

export function WebSite(props: WebSiteProps) {
  const base: WebSiteStructuredDataInput = {
    name: props.name,
    description: props.description,
    url: props.url,
    publisher: props.publisher,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.WebSiteStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="web-site"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Web site"}
        description={props.description}
        body={
          <>
            {props.publisher ? (
              <div className="lander-semantic__publisher-band">
                <span className="lander-semantic__publisher-label">Publisher</span>
                <strong className="lander-semantic__publisher-value">{props.publisher}</strong>
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

export function BreadcrumbList(props: BreadcrumbListProps) {
  const base: BreadcrumbListStructuredDataInput = {
    items: props.items.map((item, index) => ({ label: item.label, href: item.href ?? `#breadcrumb-${index + 1}` })),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.BreadcrumbListStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="breadcrumb-list"
        title={props.viewModel?.eyebrow ?? "Breadcrumb list"}
        body={
          <>
            <nav aria-label={props.label ?? "Breadcrumb"}>
              <ol className="lander-semantic__breadcrumb-trail">
                {props.items.map((item, index) => (
                  <li key={`${item.href ?? item.label}-${index}`} className="lander-semantic__breadcrumb-item">
                    {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
                    {index < props.items.length - 1 ? <span className="lander-semantic__breadcrumb-separator">/</span> : null}
                  </li>
                ))}
              </ol>
            </nav>
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
        as="section"
      />
    </>
  );
}

export function SpeakableSpecification(props: SpeakableSpecificationProps) {
  const base: SpeakableSpecificationStructuredDataInput = {
    cssSelector: props.cssSelector,
    xpath: props.xpath,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.SpeakableSpecificationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="speakable-specification"
        title={props.viewModel?.eyebrow ?? "Speakable specification"}
        body={
          <>
            <div className="lander-semantic__selector-grid">
              {props.cssSelector?.length ? (
                <section className="lander-semantic__selector-block">
                  <h3 className="lander-semantic__selector-heading">CSS selectors</h3>
                  {bodyList(props.cssSelector)}
                </section>
              ) : null}
              {props.xpath?.length ? (
                <section className="lander-semantic__selector-block">
                  <h3 className="lander-semantic__selector-heading">XPath selectors</h3>
                  {bodyList(props.xpath)}
                </section>
              ) : null}
            </div>
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
        as="section"
      />
    </>
  );
}
