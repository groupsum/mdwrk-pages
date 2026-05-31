import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import {
  SemanticShell,
  SemanticStructuredDataGate,
  bodyList,
  creativeWorkReference,
  thingReference,
} from "./shared.js";

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

export interface CommentProps {
  name: string;
  text?: string;
  author?: NamedRef | string;
  upvoteCount?: number;
  downvoteCount?: number;
  sharedContent?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CommentStructuredDataInput>;
}

export interface ContactPointProps {
  name: string;
  description?: string;
  contactType?: string;
  email?: string;
  telephone?: string;
  areaServed?: string;
  availableLanguage?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ContactPointStructuredDataInput>;
}

export interface CorrectionCommentProps {
  name: string;
  text?: string;
  author?: NamedRef | string;
  sharedContent?: string;
  upvoteCount?: number;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CorrectionCommentStructuredDataInput>;
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

export interface OccupationalExperienceRequirementsProps {
  name: string;
  description?: string;
  monthsOfExperience?: number | string;
  occupationalExperienceProperties?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<OccupationalExperienceRequirementsStructuredDataInput>;
}

export interface TextObjectProps {
  name: string;
  description?: string;
  text?: string;
  encodingFormat?: string;
  author?: NamedRef | string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<TextObjectStructuredDataInput>;
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

export function Comment(props: CommentProps) {
  const base: CommentStructuredDataInput = {
    name: props.name,
    text: props.text,
    author: ref("Person", props.author),
    upvoteCount: props.upvoteCount,
    downvoteCount: props.downvoteCount,
    sharedContent: creativeWorkReference(props.sharedContent),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CommentStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="comment"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Comment"}
        meta={[
          props.author ? { label: "Author", value: typeof props.author === "string" ? props.author : props.author.name } : null,
          props.upvoteCount !== undefined ? { label: "Upvotes", value: String(props.upvoteCount) } : null,
          props.downvoteCount !== undefined ? { label: "Downvotes", value: String(props.downvoteCount) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.text ? <p>{props.text}</p> : null}
            {props.sharedContent ? <p>Shared content: {props.sharedContent}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function ContactPoint(props: ContactPointProps) {
  const base: ContactPointStructuredDataInput = {
    name: props.name,
    description: props.description,
    contactType: props.contactType,
    email: props.email,
    telephone: props.telephone,
    areaServed: thingReference(props.areaServed),
    availableLanguage: props.availableLanguage,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ContactPointStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="contact-point"
        title={props.name ?? props.contactType ?? "Contact point"}
        eyebrow={props.viewModel?.eyebrow ?? "Contact point"}
        description={props.description}
        meta={[
          props.contactType ? { label: "Type", value: props.contactType } : null,
          props.email ? { label: "Email", value: props.email } : null,
          props.telephone ? { label: "Telephone", value: props.telephone } : null,
          props.areaServed ? { label: "Area served", value: props.areaServed } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.availableLanguage?.length ? <div className="lander-semantic__contact-languages">{bodyList(props.availableLanguage)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function CorrectionComment(props: CorrectionCommentProps) {
  const base: CorrectionCommentStructuredDataInput = {
    name: props.name,
    text: props.text,
    author: ref("Person", props.author),
    upvoteCount: props.upvoteCount,
    sharedContent: creativeWorkReference(props.sharedContent),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CorrectionCommentStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="correction-comment"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Correction"}
        body={
          <>
            {props.text ? <p>{props.text}</p> : null}
            {props.sharedContent ? <p>Corrects: {props.sharedContent}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
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

export function OccupationalExperienceRequirements(props: OccupationalExperienceRequirementsProps) {
  const base: OccupationalExperienceRequirementsStructuredDataInput = {
    name: props.name,
    description: props.description,
    monthsOfExperience: props.monthsOfExperience,
    occupationalExperienceProperties: props.occupationalExperienceProperties,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.OccupationalExperienceRequirementsStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="occupational-experience-requirements"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Occupational experience"}
        description={props.description}
        meta={[
          props.monthsOfExperience ? { label: "Months", value: String(props.monthsOfExperience) } : null,
          props.occupationalExperienceProperties ? { label: "Properties", value: props.occupationalExperienceProperties } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function TextObject(props: TextObjectProps) {
  const base: TextObjectStructuredDataInput = {
    name: props.name,
    description: props.description,
    text: props.text,
    encodingFormat: props.encodingFormat,
    author: ref("Person", props.author),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.TextObjectStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="text-object"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Text object"}
        description={props.description}
        meta={props.encodingFormat ? [{ label: "Format", value: props.encodingFormat }] : undefined}
        body={<>{props.text ? <p>{props.text}</p> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
