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

export interface WebPageProps extends WebPageStructuredDataInput {
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<WebPageStructuredDataInput>;
}

export function WebPage(props: WebPageProps) {
  const { body, viewModel, className, emitStructuredData, structuredDataOverrides, ...base } = props;
  const structuredData = { ...base, ...(structuredDataOverrides ?? {}) } as WebPageStructuredDataInput;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
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
            {renderStructuredSection(omitRecordKeys(structuredData as Record<string, unknown>, [
              "name",
              "description",
              "primaryType",
              "datePublished",
              "dateModified",
            ]), "Structured fields")}
            {props.body}
          </>
        }
        footer={viewModel?.footer}
        className={className}
      />
    </>
  );
}

export interface WebSiteProps extends WebSiteStructuredDataInput {
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<WebSiteStructuredDataInput>;
}

export function WebSite(props: WebSiteProps) {
  const { body, viewModel, className, emitStructuredData, structuredDataOverrides, ...base } = props;
  const structuredData = { ...base, ...(structuredDataOverrides ?? {}) } as WebSiteStructuredDataInput;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.WebSiteStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="web-site"
        title={typeof structuredData.name === "string" ? structuredData.name : "Web site"}
        eyebrow={viewModel?.eyebrow ?? "Web site"}
        description={typeof structuredData.description === "string" ? structuredData.description : undefined}
        imageSrc={firstImage(structuredData.image as string | string[] | undefined)}
        body={
          <>
            {structuredData.publisher ? (
              <div className="lander-semantic__publisher-band">
                <span className="lander-semantic__publisher-label">Publisher</span>
                <strong className="lander-semantic__publisher-value">{renderJsonPreview(structuredData.publisher)}</strong>
              </div>
            ) : null}
            {renderStructuredSection(omitRecordKeys(structuredData as Record<string, unknown>, [
              "name",
              "description",
              "publisher",
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

export interface BreadcrumbListProps {
  items: Array<{ label: string; href?: string }>;
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<BreadcrumbListStructuredDataInput>;
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
