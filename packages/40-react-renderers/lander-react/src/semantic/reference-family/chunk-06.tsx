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

export interface HyperTocEntryProps {
  name: string;
  description?: string;
  text?: string;
  position?: number | string;
  target?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HyperTocEntryStructuredDataInput>;
}

export function HyperTocEntry(props: HyperTocEntryProps) {
  const base: HyperTocEntryStructuredDataInput = {
    name: props.name,
    description: props.description,
    text: props.text,
    position: props.position,
    url: typeof props.target === "string" ? props.target : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HyperTocEntryStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="hyper-toc-entry"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "HyperToc entry"}
        description={props.description}
        meta={[
          props.position !== undefined ? { label: "Position", value: String(props.position) } : null,
          props.target ? { label: "Target", value: props.target } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.text ? <p>{props.text}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface MapProps {
  name: string;
  description?: string;
  text?: string;
  mapType?: string;
  about?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MapStructuredDataInput>;
}

export function Map(props: MapProps) {
  const base: MapStructuredDataInput = {
    name: props.name,
    description: props.description,
    text: props.text,
    mapType: props.mapType,
    about: thingReference(props.about),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MapStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="map"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Map"}
        description={props.description}
        meta={[
          props.mapType ? { label: "Map type", value: props.mapType } : null,
          props.about ? { label: "About", value: props.about } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.text ? <p>{props.text}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface OccupationProps {
  name: string;
  description?: string;
  educationRequirements?: string;
  experienceRequirements?: string;
  occupationalCategory?: string[];
  skills?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<OccupationStructuredDataInput>;
}

export function Occupation(props: OccupationProps) {
  const base: OccupationStructuredDataInput = {
    name: props.name,
    description: props.description,
    educationRequirements: props.educationRequirements,
    experienceRequirements: props.experienceRequirements,
    occupationalCategory: props.occupationalCategory,
    skills: props.skills,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.OccupationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="occupation"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Occupation"}
        description={props.description}
        meta={[
          props.educationRequirements ? { label: "Education", value: props.educationRequirements } : null,
          props.experienceRequirements ? { label: "Experience", value: props.experienceRequirements } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={<>{props.occupationalCategory?.length ? <div className="lander-semantic__occupation-categories">{bodyList(props.occupationalCategory)}</div> : null}{props.skills?.length ? <div className="lander-semantic__occupation-skills">{bodyList(props.skills)}</div> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
