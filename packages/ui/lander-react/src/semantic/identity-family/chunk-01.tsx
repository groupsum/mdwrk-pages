import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList, renderJsonPreview, thingReference, renderStructuredSection, omitRecordKeys, firstImage } from "../shared.js";

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

export interface ProfilePageProps extends ProfilePageStructuredDataInput {
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ProfilePageStructuredDataInput>;
}

export function ProfilePage(props: ProfilePageProps) {
  const { body, viewModel, className, emitStructuredData, structuredDataOverrides, ...base } = props;
  const structuredData = {
    ...base,
    mainEntity: thingReference(base.mainEntity),
    ...(structuredDataOverrides ?? {}),
  } as ProfilePageStructuredDataInput;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.ProfilePageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="profile-page"
        title={typeof structuredData.name === "string" ? structuredData.name : "Profile"}
        eyebrow={viewModel?.eyebrow ?? "Profile"}
        description={typeof structuredData.description === "string" ? structuredData.description : undefined}
        imageSrc={firstImage(structuredData.image as string | string[] | undefined)}
        body={
          <>
            {structuredData.mainEntity ? <div className="lander-semantic__profile-summary">
              <span className="lander-semantic__profile-label">Main entity</span>
              <strong className="lander-semantic__profile-entity">{renderJsonPreview(structuredData.mainEntity)}</strong>
            </div> : null}
            {renderStructuredSection(omitRecordKeys(structuredData as Record<string, unknown>, [
              "name",
              "description",
              "mainEntity",
            ]), "Structured fields")}
            {body}
          </>
        }
        footer={viewModel?.footer}
        className={className}
      />
    </>
  );
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

export function buildOrganizationStructuredData(props: OrganizationProps): OrganizationStructuredDataInput {
  const base: OrganizationStructuredDataInput = {
    name: props.name,
    description: props.description,
    url: props.url,
    logo: props.logo,
    sameAs: props.sameAs,
  };
  return { ...base, ...(props.structuredDataOverrides ?? {}) };
}

export function Organization(props: OrganizationProps) {
  const structuredData = buildOrganizationStructuredData(props);
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData} kind="Organization" data={structuredData}>
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

(Organization as typeof Organization & { toStructuredData: (props: OrganizationProps) => unknown }).toStructuredData = (props) =>
  structuredDataReact.buildStructuredDataNode("Organization", buildOrganizationStructuredData(props));

export interface EducationalOrganizationProps extends OrganizationProps {
  address?: string;
  structuredDataOverrides?: Partial<EducationalOrganizationStructuredDataInput>;
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
