import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList, firstImage, renderJsonPreview } from "../shared.js";

type DatasetStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DatasetStructuredData>["data"];
type ItemListStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ItemListStructuredData>["data"];
type BookStructuredDataInput = React.ComponentProps<typeof structuredDataReact.BookStructuredData>["data"];
type RecipeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.RecipeStructuredData>["data"];
type SoftwareApplicationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.SoftwareApplicationStructuredData>["data"];
type RuntimePlatformStructuredDataInput = React.ComponentProps<typeof structuredDataReact.RuntimePlatformStructuredData>["data"];
type OperatingSystemStructuredDataInput = React.ComponentProps<typeof structuredDataReact.OperatingSystemStructuredData>["data"];
type SoftwareSourceCodeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.SoftwareSourceCodeStructuredData>["data"];
type VacationRentalStructuredDataInput = React.ComponentProps<typeof structuredDataReact.VacationRentalStructuredData>["data"];
type VehicleStructuredDataInput = React.ComponentProps<typeof structuredDataReact.VehicleStructuredData>["data"];
type JobPostingStructuredDataInput = React.ComponentProps<typeof structuredDataReact.JobPostingStructuredData>["data"];
type ReadActionTarget = React.ComponentProps<typeof structuredDataReact.ReadActionStructuredData>["target"];
type EventStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EventStructuredData>["data"];
type MenuItemStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MenuItemStructuredData>["data"];
type MenuSectionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MenuSectionStructuredData>["data"];
type ProductModelStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ProductModelStructuredData>["data"];
type TaxonStructuredDataInput = React.ComponentProps<typeof structuredDataReact.TaxonStructuredData>["data"];

export interface ReadActionProps {
  target: ReadActionTarget;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<{ target: ReadActionTarget }>;
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

export interface MenuItemProps {
  name: string;
  description?: string;
  offers?: Array<{ name: string; price?: string; priceCurrency?: string }>;
  nutrition?: string;
  suitableForDiet?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MenuItemStructuredDataInput>;
}

export function MenuItem(props: MenuItemProps) {
  const suitableForDiet = props.suitableForDiet?.map((item) =>
    /^https?:\/\//u.test(item) ? item : `https://schema.org/${item.endsWith("Diet") ? item : `${item}Diet`}`,
  );
  const base: MenuItemStructuredDataInput = {
    name: props.name,
    description: props.description,
    offers: props.offers?.map((item) => ({ "@type": "Offer", name: item.name, price: item.price, priceCurrency: item.priceCurrency })),
    nutrition: props.nutrition ? { "@type": "NutritionInformation", name: props.nutrition } : undefined,
    suitableForDiet,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MenuItemStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="menu-item"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Menu item"}
        description={props.description}
        meta={props.nutrition ? [{ label: "Nutrition", value: props.nutrition }] : undefined}
        body={<>{props.offers?.length ? <ul className="lander-semantic__item-list-grid">{props.offers.map((item) => <li key={item.name} className="lander-semantic__item-card">{item.name}{item.price ? ` ${item.priceCurrency ? `${item.priceCurrency} ` : ""}${item.price}` : ""}</li>)}</ul> : null}{props.suitableForDiet?.length ? <div className="lander-semantic__keyword-cloud">{props.suitableForDiet.map((item) => <span key={item} className="lander-semantic__keyword-chip">{item}</span>)}</div> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
