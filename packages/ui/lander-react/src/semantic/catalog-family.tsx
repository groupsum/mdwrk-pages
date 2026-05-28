import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList, firstImage, renderJsonPreview } from "./shared.js";

type DatasetStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DatasetStructuredData>["data"];
type ItemListStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ItemListStructuredData>["data"];
type BookStructuredDataInput = React.ComponentProps<typeof structuredDataReact.BookStructuredData>["data"];
type RecipeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.RecipeStructuredData>["data"];
type SoftwareApplicationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.SoftwareApplicationStructuredData>["data"];
type SoftwareSourceCodeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.SoftwareSourceCodeStructuredData>["data"];
type VacationRentalStructuredDataInput = React.ComponentProps<typeof structuredDataReact.VacationRentalStructuredData>["data"];
type VehicleStructuredDataInput = React.ComponentProps<typeof structuredDataReact.VehicleStructuredData>["data"];
type JobPostingStructuredDataInput = React.ComponentProps<typeof structuredDataReact.JobPostingStructuredData>["data"];
type ReadActionTarget = React.ComponentProps<typeof structuredDataReact.ReadActionStructuredData>["target"];
type EventStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EventStructuredData>["data"];

export interface DatasetProps {
  name: string;
  description?: string;
  creator?: string;
  keywords?: string[];
  datePublished?: string;
  dateModified?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DatasetStructuredDataInput>;
}

export interface ItemListProps {
  name: string;
  items: Array<{ name: string; url?: string; item?: string }>;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ItemListStructuredDataInput>;
}

export interface BookProps {
  name: string;
  description?: string;
  author?: { name: string };
  isbn?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<BookStructuredDataInput>;
}

export interface RecipeProps {
  name: string;
  description?: string;
  recipeIngredient: string[];
  recipeInstructions: string | Array<{ name: string; text: string }>;
  author?: { name: string };
  datePublished?: string;
  prepTime?: string;
  cookTime?: string;
  totalTime?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<RecipeStructuredDataInput>;
}

export interface SoftwareApplicationProps {
  name: string;
  description?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  softwareVersion?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<SoftwareApplicationStructuredDataInput>;
}

export interface WebApplicationProps extends SoftwareApplicationProps {}

export interface SoftwareSourceCodeProps {
  name: string;
  description?: string;
  codeRepository?: string;
  programmingLanguage?: string | string[];
  runtimePlatform?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<SoftwareSourceCodeStructuredDataInput>;
}

export interface VacationRentalProps {
  name: string;
  description?: string;
  address?: string;
  containsPlace?: Array<{ name: string }>;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<VacationRentalStructuredDataInput>;
}

export interface VehicleProps {
  name: string;
  description?: string;
  brand?: { name: string };
  price?: number | string;
  priceCurrency?: string;
  vehicleIdentificationNumber?: string;
  vehicleModelDate?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<VehicleStructuredDataInput>;
}

export interface JobPostingProps {
  name: string;
  title: string;
  datePosted: string;
  validThrough?: string;
  employmentType?: string | string[];
  hiringOrganization: string;
  jobLocation?: string;
  baseSalary?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<JobPostingStructuredDataInput>;
}

export interface ReadActionProps {
  target: ReadActionTarget;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<{ target: ReadActionTarget }>;
}

export interface EventProps {
  name: string;
  description?: string;
  startDate: string;
  endDate?: string;
  eventStatus?: string;
  eventAttendanceMode?: string;
  location?: string;
  organizer?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<EventStructuredDataInput>;
}

export function Dataset(props: DatasetProps) {
  const base: DatasetStructuredDataInput = {
    name: props.name,
    description: props.description,
    creator: props.creator,
    keywords: props.keywords,
    datePublished: props.datePublished,
    dateModified: props.dateModified,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DatasetStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="dataset"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Dataset"}
        description={props.description}
        meta={[
          props.creator ? { label: "Creator", value: props.creator } : null,
          props.datePublished ? { label: "Published", value: props.datePublished } : null,
          props.dateModified ? { label: "Updated", value: props.dateModified } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.keywords?.length ? (
              <ul className="lander-semantic__keyword-cloud">
                {props.keywords.map((keyword) => (
                  <li key={keyword} className="lander-semantic__keyword-chip">{keyword}</li>
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

export function ItemList(props: ItemListProps) {
  const base: ItemListStructuredDataInput = {
    name: props.name,
    items: props.items,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ItemListStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="item-list"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Item list"}
        body={
          <>
            <ol className="lander-semantic__item-list-grid">
              {props.items.map((item, index) => (
                <li key={`${item.url ?? item.name}-${index}`} className="lander-semantic__item-card">
                  <span className="lander-semantic__item-rank">{index + 1}</span>
                  {item.url ? <a href={item.url}>{item.name}</a> : item.name}
                </li>
              ))}
            </ol>
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function Book(props: BookProps) {
  const base: BookStructuredDataInput = {
    name: props.name,
    description: props.description,
    author: props.author ? { "@type": "Person", name: props.author.name } : undefined,
    isbn: props.isbn,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.BookStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="book"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Book"}
        description={props.description}
        meta={[
          props.author?.name ? { label: "Author", value: props.author.name } : null,
          props.isbn ? { label: "ISBN", value: props.isbn } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {(props.author?.name || props.isbn) ? (
              <div className="lander-semantic__book-spine">
                {props.author?.name ? <span className="lander-semantic__book-author">{props.author.name}</span> : null}
                {props.isbn ? <span className="lander-semantic__book-isbn">{props.isbn}</span> : null}
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

export function Recipe(props: RecipeProps) {
  const base: RecipeStructuredDataInput = {
    name: props.name,
    description: props.description,
    recipeIngredient: props.recipeIngredient,
    recipeInstructions: props.recipeInstructions,
    author: props.author ? { "@type": "Person", name: props.author.name } : undefined,
    datePublished: props.datePublished,
    prepTime: props.prepTime,
    cookTime: props.cookTime,
    totalTime: props.totalTime,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const instructionList = typeof props.recipeInstructions === "string"
    ? <p>{props.recipeInstructions}</p>
    : (
      <ol className="lander-semantic__recipe-steps">
        {props.recipeInstructions.map((step, index) => (
          <li key={`${step.name}-${index}`} className="lander-semantic__recipe-step">
            <strong className="lander-semantic__recipe-step-name">{step.name}</strong>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    );
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.RecipeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="recipe"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Recipe"}
        description={props.description}
        meta={[
          props.author?.name ? { label: "Author", value: props.author.name } : null,
          props.datePublished ? { label: "Published", value: props.datePublished } : null,
          props.prepTime ? { label: "Prep", value: props.prepTime } : null,
          props.cookTime ? { label: "Cook", value: props.cookTime } : null,
          props.totalTime ? { label: "Total", value: props.totalTime } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            <h2>Ingredients</h2>
            <ul className="lander-semantic__ingredient-list">
              {props.recipeIngredient.map((ingredient) => (
                <li key={ingredient} className="lander-semantic__ingredient-chip">{ingredient}</li>
              ))}
            </ul>
            <h2>Instructions</h2>
            {instructionList}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

function softwareAppShell(kind: string, props: SoftwareApplicationProps) {
  return (
    <SemanticShell
      kind={kind}
      title={props.name}
      eyebrow={props.viewModel?.eyebrow ?? (kind === "web-application" ? "Web application" : "Software application")}
      description={props.description}
      meta={[
        props.applicationCategory ? { label: "Category", value: props.applicationCategory } : null,
        props.operatingSystem ? { label: "Operating system", value: props.operatingSystem } : null,
        props.softwareVersion ? { label: "Version", value: props.softwareVersion } : null,
      ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
      body={
        <>
          {(props.applicationCategory || props.operatingSystem || props.softwareVersion) ? (
            <div className="lander-semantic__app-spec-grid">
              {props.applicationCategory ? (
                <div className="lander-semantic__app-spec">
                  <span className="lander-semantic__app-spec-label">Category</span>
                  <strong className="lander-semantic__app-spec-value">{props.applicationCategory}</strong>
                </div>
              ) : null}
              {props.operatingSystem ? (
                <div className="lander-semantic__app-spec">
                  <span className="lander-semantic__app-spec-label">Platform</span>
                  <strong className="lander-semantic__app-spec-value">{props.operatingSystem}</strong>
                </div>
              ) : null}
              {props.softwareVersion ? (
                <div className="lander-semantic__app-spec">
                  <span className="lander-semantic__app-spec-label">Version</span>
                  <strong className="lander-semantic__app-spec-value">{props.softwareVersion}</strong>
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
  );
}

export function SoftwareApplication(props: SoftwareApplicationProps) {
  const base: SoftwareApplicationStructuredDataInput = {
    name: props.name,
    description: props.description,
    applicationCategory: props.applicationCategory,
    operatingSystem: props.operatingSystem,
    softwareVersion: props.softwareVersion,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.SoftwareApplicationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {softwareAppShell("software-application", props)}
    </>
  );
}

export function WebApplication(props: WebApplicationProps) {
  const base: SoftwareApplicationStructuredDataInput = {
    name: props.name,
    description: props.description,
    applicationCategory: props.applicationCategory,
    operatingSystem: props.operatingSystem,
    softwareVersion: props.softwareVersion,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.WebApplicationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {softwareAppShell("web-application", props)}
    </>
  );
}

export function SoftwareSourceCode(props: SoftwareSourceCodeProps) {
  const base: SoftwareSourceCodeStructuredDataInput = {
    name: props.name,
    description: props.description,
    codeRepository: props.codeRepository,
    programmingLanguage: props.programmingLanguage,
    runtimePlatform: props.runtimePlatform,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.SoftwareSourceCodeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="software-source-code"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Software source code"}
        description={props.description}
        meta={[
          props.codeRepository ? { label: "Repository", value: props.codeRepository } : null,
          props.runtimePlatform ? { label: "Runtime", value: props.runtimePlatform } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {Array.isArray(props.programmingLanguage) ? (
              <ul className="lander-semantic__language-list">
                {props.programmingLanguage.map((language) => (
                  <li key={language} className="lander-semantic__language-chip">{language}</li>
                ))}
              </ul>
            ) : null}
            {typeof props.programmingLanguage === "string" ? <p className="lander-semantic__language-inline">{props.programmingLanguage}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function VacationRental(props: VacationRentalProps) {
  const base: VacationRentalStructuredDataInput = {
    name: props.name,
    description: props.description,
    address: props.address,
    containsPlace: props.containsPlace?.map((item) => ({ "@type": "Place", name: item.name })),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.VacationRentalStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="vacation-rental"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Vacation rental"}
        description={props.description}
        meta={props.address ? [{ label: "Address", value: props.address }] : undefined}
        body={
          <>
            {props.containsPlace?.length ? (
              <ul className="lander-semantic__amenity-list">
                {props.containsPlace.map((item) => (
                  <li key={item.name} className="lander-semantic__amenity-card">{item.name}</li>
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

export function Vehicle(props: VehicleProps) {
  const base: VehicleStructuredDataInput = {
    name: props.name,
    description: props.description,
    brand: props.brand ? { "@type": "Brand", name: props.brand.name } : undefined,
    offers: props.price !== undefined ? { "@type": "Offer", price: props.price, priceCurrency: props.priceCurrency } : undefined,
    vehicleIdentificationNumber: props.vehicleIdentificationNumber,
    vehicleModelDate: props.vehicleModelDate,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.VehicleStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="vehicle"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Vehicle"}
        description={props.description}
        meta={[
          props.brand?.name ? { label: "Brand", value: props.brand.name } : null,
          props.price !== undefined ? { label: "Price", value: `${props.priceCurrency ? `${props.priceCurrency} ` : ""}${props.price}` } : null,
          props.vehicleIdentificationNumber ? { label: "VIN", value: props.vehicleIdentificationNumber } : null,
          props.vehicleModelDate ? { label: "Model year", value: props.vehicleModelDate } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {(props.brand?.name || props.price !== undefined || props.vehicleModelDate) ? (
              <div className="lander-semantic__vehicle-dashboard">
                {props.brand?.name ? <div className="lander-semantic__vehicle-stat"><span>Brand</span><strong>{props.brand.name}</strong></div> : null}
                {props.price !== undefined ? <div className="lander-semantic__vehicle-stat"><span>Price</span><strong>{props.priceCurrency ? `${props.priceCurrency} ` : ""}{props.price}</strong></div> : null}
                {props.vehicleModelDate ? <div className="lander-semantic__vehicle-stat"><span>Model year</span><strong>{props.vehicleModelDate}</strong></div> : null}
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

export function JobPosting(props: JobPostingProps) {
  const base: JobPostingStructuredDataInput = {
    name: props.name,
    title: props.title,
    datePosted: props.datePosted,
    validThrough: props.validThrough,
    employmentType: props.employmentType,
    hiringOrganization: props.hiringOrganization,
    jobLocation: props.jobLocation,
    baseSalary: props.baseSalary ? { "@type": "MonetaryAmount", value: props.baseSalary } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.JobPostingStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="job-posting"
        title={props.title}
        eyebrow={props.viewModel?.eyebrow ?? "Job posting"}
        description={props.name}
        meta={[
          { label: "Posted", value: props.datePosted },
          props.validThrough ? { label: "Valid through", value: props.validThrough } : null,
          { label: "Organization", value: props.hiringOrganization },
          props.jobLocation ? { label: "Location", value: props.jobLocation } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {Array.isArray(props.employmentType) ? (
              <ul className="lander-semantic__employment-types">
                {props.employmentType.map((type) => (
                  <li key={type} className="lander-semantic__employment-type">{type}</li>
                ))}
              </ul>
            ) : null}
            {typeof props.employmentType === "string" ? <p className="lander-semantic__employment-inline">{props.employmentType}</p> : null}
            {props.baseSalary ? (
              <div className="lander-semantic__salary-band">
                <span className="lander-semantic__salary-label">Base salary</span>
                <strong className="lander-semantic__salary-value">{props.baseSalary}</strong>
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

export function ReadAction(props: ReadActionProps) {
  const target = props.structuredDataOverrides?.target ?? props.target;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ReadActionStructuredData target={target} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="read-action"
        title={props.viewModel?.eyebrow ?? "Read action"}
        body={
          <>
            <pre className="lander-semantic__target-preview">{renderJsonPreview(props.target)}</pre>
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

export function Event(props: EventProps) {
  const base: EventStructuredDataInput = {
    name: props.name,
    description: props.description,
    startDate: props.startDate,
    endDate: props.endDate,
    eventStatus: props.eventStatus,
    eventAttendanceMode: props.eventAttendanceMode,
    location: props.location,
    organizer: props.organizer,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.EventStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="event"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Event"}
        description={props.description}
        meta={[
          { label: "Starts", value: props.startDate },
          props.endDate ? { label: "Ends", value: props.endDate } : null,
          props.location ? { label: "Location", value: props.location } : null,
          props.organizer ? { label: "Organizer", value: props.organizer } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {(props.eventStatus || props.eventAttendanceMode) ? (
              <div className="lander-semantic__event-badges">
                {props.eventStatus ? <span className="lander-semantic__event-badge">{props.eventStatus}</span> : null}
                {props.eventAttendanceMode ? <span className="lander-semantic__event-badge">{props.eventAttendanceMode}</span> : null}
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
