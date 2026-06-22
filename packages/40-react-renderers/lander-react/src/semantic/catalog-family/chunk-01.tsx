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

export interface ItemListProps {
  name: string;
  items: Array<{ name: string; url?: string; item?: string }>;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ItemListStructuredDataInput>;
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
