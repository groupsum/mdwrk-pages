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

export interface SpeakableSpecificationProps {
  cssSelector?: string[];
  xpath?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<SpeakableSpecificationStructuredDataInput>;
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
