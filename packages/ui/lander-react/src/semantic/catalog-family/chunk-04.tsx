import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList, firstImage, renderJsonPreview, renderStructuredSection, omitRecordKeys } from "../shared.js";

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

export interface VacationRentalProps extends VacationRentalStructuredDataInput {
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<VacationRentalStructuredDataInput>;
}

export function VacationRental(props: VacationRentalProps) {
  const { body, viewModel, className, emitStructuredData, structuredDataOverrides, ...base } = props;
  const structuredData = { ...base, ...(structuredDataOverrides ?? {}) } as VacationRentalStructuredDataInput;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.VacationRentalStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="vacation-rental"
        title={typeof structuredData.name === "string" ? structuredData.name : "Vacation rental"}
        eyebrow={viewModel?.eyebrow ?? "Vacation rental"}
        description={typeof structuredData.description === "string" ? structuredData.description : undefined}
        meta={typeof structuredData.address === "string" ? [{ label: "Address", value: structuredData.address }] : undefined}
        body={
          <>
            {Array.isArray(structuredData.containsPlace) ? (
              <ul className="lander-semantic__amenity-list">
                {structuredData.containsPlace.map((item, index) => (
                  <li key={`${index}`} className="lander-semantic__amenity-card">{renderJsonPreview(item)}</li>
                ))}
              </ul>
            ) : null}
            {renderStructuredSection(omitRecordKeys(structuredData as Record<string, unknown>, [
              "name",
              "description",
              "address",
              "containsPlace",
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

export interface JobPostingProps extends JobPostingStructuredDataInput {
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<JobPostingStructuredDataInput>;
}

export function JobPosting(props: JobPostingProps) {
  const { body, viewModel, className, emitStructuredData, structuredDataOverrides, ...base } = props;
  const structuredData = { ...base, ...(structuredDataOverrides ?? {}) } as JobPostingStructuredDataInput;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.JobPostingStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="job-posting"
        title={typeof structuredData.title === "string" ? structuredData.title : "Job posting"}
        eyebrow={viewModel?.eyebrow ?? "Job posting"}
        description={typeof structuredData.name === "string" ? structuredData.name : undefined}
        meta={[
          structuredData.datePosted ? { label: "Posted", value: String(structuredData.datePosted) } : null,
          structuredData.validThrough ? { label: "Valid through", value: String(structuredData.validThrough) } : null,
          structuredData.hiringOrganization ? { label: "Organization", value: renderJsonPreview(structuredData.hiringOrganization) } : null,
          structuredData.jobLocation ? { label: "Location", value: renderJsonPreview(structuredData.jobLocation) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {Array.isArray(structuredData.employmentType) ? (
              <ul className="lander-semantic__employment-types">
                {structuredData.employmentType.map((type) => (
                  <li key={type} className="lander-semantic__employment-type">{type}</li>
                ))}
              </ul>
            ) : null}
            {typeof structuredData.employmentType === "string" ? <p className="lander-semantic__employment-inline">{structuredData.employmentType}</p> : null}
            {structuredData.baseSalary ? (
              <div className="lander-semantic__salary-band">
                <span className="lander-semantic__salary-label">Base salary</span>
                <strong className="lander-semantic__salary-value">{renderJsonPreview(structuredData.baseSalary)}</strong>
              </div>
            ) : null}
            {renderStructuredSection(omitRecordKeys(structuredData as Record<string, unknown>, [
              "name",
              "title",
              "datePosted",
              "validThrough",
              "employmentType",
              "hiringOrganization",
              "jobLocation",
              "baseSalary",
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
