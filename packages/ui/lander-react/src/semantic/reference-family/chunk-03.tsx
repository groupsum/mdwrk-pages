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

export interface CountryProps {
  name: string;
  description?: string;
  containedInPlace?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CountryStructuredDataInput>;
}

export function Country(props: CountryProps) {
  const base: CountryStructuredDataInput = {
    name: props.name,
    description: props.description,
    containedInPlace: ref("Place", props.containedInPlace),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CountryStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="country"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Country"}
        description={props.description}
        meta={props.containedInPlace ? [{ label: "Contained in", value: props.containedInPlace }] : undefined}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface CreativeWorkProps {
  name: string;
  description?: string;
  text?: string;
  author?: NamedRef | string;
  about?: string;
  audience?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CreativeWorkStructuredDataInput>;
}

export function CreativeWork(props: CreativeWorkProps) {
  const base: CreativeWorkStructuredDataInput = {
    name: props.name,
    description: props.description,
    text: props.text,
    author: ref("Person", props.author),
    about: thingReference(props.about),
    audience: props.audience?.map((entry) => ({ "@type": "Audience", name: entry })),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CreativeWorkStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="creative-work"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Creative work"}
        description={props.description}
        meta={[
          props.author ? { label: "Author", value: typeof props.author === "string" ? props.author : props.author.name } : null,
          props.about ? { label: "About", value: props.about } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.text ? <p>{props.text}</p> : null}
            {props.audience?.length ? <div className="lander-semantic__creative-work-audience">{bodyList(props.audience)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface CreativeWorkSeasonProps {
  name: string;
  description?: string;
  seasonNumber?: number | string;
  numberOfEpisodes?: number;
  startDate?: string;
  endDate?: string;
  partOfSeries?: NamedRef | string;
  episodes?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CreativeWorkSeasonStructuredDataInput>;
}

export function CreativeWorkSeason(props: CreativeWorkSeasonProps) {
  const base: CreativeWorkSeasonStructuredDataInput = {
    name: props.name,
    description: props.description,
    seasonNumber: props.seasonNumber,
    numberOfEpisodes: props.numberOfEpisodes,
    startDate: props.startDate,
    endDate: props.endDate,
    partOfSeries: creativeWorkReference(props.partOfSeries),
    episode: props.episodes?.map((entry) =>
      typeof entry === "string" ? { "@type": "Episode", name: entry } : creativeWorkReference(entry),
    ),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CreativeWorkSeasonStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="creative-work-season"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Season"}
        description={props.description}
        meta={[
          props.seasonNumber !== undefined ? { label: "Season", value: String(props.seasonNumber) } : null,
          props.numberOfEpisodes !== undefined ? { label: "Episodes", value: String(props.numberOfEpisodes) } : null,
          props.startDate ? { label: "Start", value: props.startDate } : null,
          props.endDate ? { label: "End", value: props.endDate } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.partOfSeries ? <p>Part of {typeof props.partOfSeries === "string" ? props.partOfSeries : props.partOfSeries.name}</p> : null}
            {props.episodes?.length ? <div className="lander-semantic__season-episodes">{bodyList(props.episodes, true)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
