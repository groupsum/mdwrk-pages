import React from "react";
import { Button } from "./actions.js";
import { primitiveClass } from "./shared.js";

export interface TabItem {
  value: string;
  label: React.ReactNode;
}

export interface AccordionItemProps extends Omit<React.HTMLAttributes<HTMLDetailsElement>, "title"> {
  className?: string;
  title: React.ReactNode;
  open?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export function AccordionItem({ className, title, children, open, leadingIcon, trailingIcon, ...props }: AccordionItemProps) {
  return (
    <details {...props} open={open} className={primitiveClass("accordion-item", className)} data-mdwrk-primitive="accordion-item">
      <summary>
        {leadingIcon ? <span className="mdwrk-primitive__nav-icon mdwrk-primitive__nav-icon--leading">{leadingIcon}</span> : null}
        <span className="mdwrk-primitive__nav-label">{title}</span>
        {trailingIcon ? <span className="mdwrk-primitive__nav-icon mdwrk-primitive__nav-icon--trailing">{trailingIcon}</span> : null}
      </summary>
      <div className="mdwrk-primitive__accordion-panel">{children}</div>
    </details>
  );
}

export function Accordion({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={primitiveClass("accordion", className)} data-mdwrk-primitive="accordion">{children}</div>;
}

export function Tabs({ className, items, value, onChange }: { className?: string; items: TabItem[]; value: string; onChange?: (value: string) => void }) {
  return (
    <div className={primitiveClass("tabs", className)} data-mdwrk-primitive="tabs" role="tablist">
      {items.map((item) => (
        <button key={item.value} type="button" role="tab" aria-selected={item.value === value} className="mdwrk-primitive__tab" onClick={() => onChange?.(item.value)}>
          {item.label}
        </button>
      ))}
    </div>
  );
}

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
}

export function Breadcrumbs({ className, items }: { className?: string; items: BreadcrumbItem[] }) {
  return (
    <nav className={primitiveClass("breadcrumbs", className)} data-mdwrk-primitive="breadcrumbs" aria-label="Breadcrumbs">
      <ol>
        {items.map((item, index) => <li key={index}>{item.href ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}</li>)}
      </ol>
    </nav>
  );
}

export interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export function NavItem({ className, children, active = false, href = "#", leadingIcon, trailingIcon, ...props }: NavItemProps) {
  return <a {...props} href={href} className={primitiveClass("nav-item", className, active && "active")} data-mdwrk-primitive="nav-item" aria-current={active ? "page" : undefined}>{leadingIcon ? <span className="mdwrk-primitive__nav-icon mdwrk-primitive__nav-icon--leading">{leadingIcon}</span> : null}<span className="mdwrk-primitive__nav-label">{children}</span>{trailingIcon ? <span className="mdwrk-primitive__nav-icon mdwrk-primitive__nav-icon--trailing">{trailingIcon}</span> : null}</a>;
}

export function Navbar({ className, children, "aria-label": ariaLabel = "Primary navigation", ...props }: React.HTMLAttributes<HTMLElement>) {
  return <nav {...props} className={primitiveClass("navbar", className)} data-mdwrk-primitive="navbar" aria-label={ariaLabel}>{children}</nav>;
}

export interface PaginationProps {
  className?: string;
  page: number;
  pageCount: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({ className, page, pageCount, onPageChange }: PaginationProps) {
  return (
    <nav className={primitiveClass("pagination", className)} data-mdwrk-primitive="pagination" aria-label="Pagination">
      <Button disabled={page <= 1} onClick={() => onPageChange?.(page - 1)}>Previous</Button>
      <span aria-live="polite">Page {page} of {pageCount}</span>
      <Button disabled={page >= pageCount} onClick={() => onPageChange?.(page + 1)}>Next</Button>
    </nav>
  );
}

export function Tree({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={primitiveClass("tree", className)} data-mdwrk-primitive="tree" role="tree">{children}</div>;
}

export function Explorer({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={primitiveClass("explorer", className)} data-mdwrk-primitive="explorer">{children}</div>;
}

export function ViewToggle({ className, items, value, onChange }: { className?: string; items: TabItem[]; value: string; onChange?: (value: string) => void }) {
  return (
    <div className={primitiveClass("tabs", "view-toggle", className)} data-mdwrk-primitive="view-toggle" role="tablist">
      {items.map((item) => (
        <button key={item.value} type="button" role="tab" aria-selected={item.value === value} className="mdwrk-primitive__tab" onClick={() => onChange?.(item.value)}>
          {item.label}
        </button>
      ))}
    </div>
  );
}
