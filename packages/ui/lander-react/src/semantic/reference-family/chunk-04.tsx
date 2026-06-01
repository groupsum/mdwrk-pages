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

export interface CreativeWorkSeriesProps {
  name: string;
  description?: string;
  issn?: string;
  startDate?: string;
  endDate?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CreativeWorkSeriesStructuredDataInput>;
}

export function CreativeWorkSeries(props: CreativeWorkSeriesProps) {
  const base: CreativeWorkSeriesStructuredDataInput = {
    name: props.name,
    description: props.description,
    issn: props.issn,
    startDate: props.startDate,
    endDate: props.endDate,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CreativeWorkSeriesStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="creative-work-series"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Series"}
        description={props.description}
        meta={[
          props.issn ? { label: "ISSN", value: props.issn } : null,
          props.startDate ? { label: "Start", value: props.startDate } : null,
          props.endDate ? { label: "End", value: props.endDate } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface EpisodeProps {
  name: string;
  description?: string;
  episodeNumber?: number | string;
  partOfSeries?: NamedRef | string;
  partOfSeason?: NamedRef | string;
  actor?: string[];
  director?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<EpisodeStructuredDataInput>;
}

export function Episode(props: EpisodeProps) {
  const base: EpisodeStructuredDataInput = {
    name: props.name,
    description: props.description,
    episodeNumber: props.episodeNumber,
    partOfSeries: ref("CreativeWorkSeries", props.partOfSeries),
    partOfSeason: ref("CreativeWorkSeason", props.partOfSeason),
    actor: props.actor?.map((entry) => ref("Person", entry)),
    director: props.director?.map((entry) => ref("Person", entry)),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.EpisodeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="episode"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Episode"}
        description={props.description}
        meta={[
          props.episodeNumber !== undefined ? { label: "Episode", value: String(props.episodeNumber) } : null,
          props.partOfSeries ? { label: "Series", value: typeof props.partOfSeries === "string" ? props.partOfSeries : props.partOfSeries.name } : null,
          props.partOfSeason ? { label: "Season", value: typeof props.partOfSeason === "string" ? props.partOfSeason : props.partOfSeason.name } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.actor?.length ? <div className="lander-semantic__season-episodes">{bodyList(props.actor)}</div> : null}
            {props.director?.length ? <p>Directed by {props.director.join(", ")}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface FinancialProductProps {
  name: string;
  description?: string;
  annualPercentageRate?: number | string;
  interestRate?: number | string;
  feesAndCommissionsSpecification?: string;
  provider?: NamedRef | string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<FinancialProductStructuredDataInput>;
}

export function FinancialProduct(props: FinancialProductProps) {
  const base: FinancialProductStructuredDataInput = {
    name: props.name,
    description: props.description,
    annualPercentageRate: props.annualPercentageRate,
    interestRate: props.interestRate,
    feesAndCommissionsSpecification: props.feesAndCommissionsSpecification,
    provider: ref("Organization", props.provider),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.FinancialProductStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="financial-product"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Financial product"}
        description={props.description}
        meta={[
          props.annualPercentageRate !== undefined ? { label: "APR", value: String(props.annualPercentageRate) } : null,
          props.interestRate !== undefined ? { label: "Interest", value: String(props.interestRate) } : null,
          props.provider ? { label: "Provider", value: typeof props.provider === "string" ? props.provider : props.provider.name } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={<>{props.feesAndCommissionsSpecification ? <p>{props.feesAndCommissionsSpecification}</p> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
