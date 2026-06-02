import React from "react";
import { PrimitiveBaseProps, primitiveClass } from "./shared.js";

export interface CardProps extends PrimitiveBaseProps, Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  title?: React.ReactNode;
  footer?: React.ReactNode;
}

export function Card({ className, title, children, footer, ...props }: CardProps) {
  return (
    <article {...props} className={primitiveClass("card", className)} data-mdwrk-primitive="card">
      {title ? <CardHeader>{title}</CardHeader> : null}
      <CardBody>{children}</CardBody>
      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </article>
  );
}

export function CardHeader({ className, children, ...props }: PrimitiveBaseProps & React.HTMLAttributes<HTMLElement>) {
  return <header {...props} className={primitiveClass("card-header", className)} data-mdwrk-primitive="card-header">{children}</header>;
}

export function CardBody({ className, children, ...props }: PrimitiveBaseProps & React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={primitiveClass("card-body", className)} data-mdwrk-primitive="card-body">{children}</div>;
}

export function CardFooter({ className, children, ...props }: PrimitiveBaseProps & React.HTMLAttributes<HTMLElement>) {
  return <footer {...props} className={primitiveClass("card-footer", className)} data-mdwrk-primitive="card-footer">{children}</footer>;
}

export function Cards({ className, children, ...props }: PrimitiveBaseProps & React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={primitiveClass("cards", className)} data-mdwrk-primitive="cards">{children}</div>;
}

export function CardGrid({ className, children, ...props }: PrimitiveBaseProps & React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={primitiveClass("card-grid", className)} data-mdwrk-primitive="card-grid">{children}</div>;
}

export function ArticleBlock({ className, children }: PrimitiveBaseProps) {
  return <article className={primitiveClass("article-block", className)} data-mdwrk-primitive="article-block">{children}</article>;
}

export function CodeBlock({ className, code, language, children }: PrimitiveBaseProps & { code?: string; language?: string }) {
  return <pre className={primitiveClass("code-block", className)} data-mdwrk-primitive="code-block" data-language={language}><code>{children ?? code}</code></pre>;
}

export function JsonPreview({ className, value }: { className?: string; value: unknown }) {
  return <pre className={primitiveClass("code-block", "json-preview", className)} data-mdwrk-primitive="json-preview" data-language="json"><code>{JSON.stringify(value, null, 2)}</code></pre>;
}

export interface DataTableProps {
  className?: string;
  columns: string[];
  rows: Array<Record<string, React.ReactNode>>;
}

export function DataTable({ className, columns, rows }: DataTableProps) {
  return (
    <table className={primitiveClass("data-table", className)} data-mdwrk-primitive="data-table">
      <thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
      <tbody>{rows.map((row, index) => <tr key={index}>{columns.map((column) => <td key={column}>{row[column]}</td>)}</tr>)}</tbody>
    </table>
  );
}

export function TableOfContents({ className, children }: PrimitiveBaseProps) {
  return <nav className={primitiveClass("table-of-contents", className)} data-mdwrk-primitive="table-of-contents">{children}</nav>;
}

export function OrderedList({ className, children }: PrimitiveBaseProps) {
  return <ol className={primitiveClass("ordered-list", className)} data-mdwrk-primitive="ordered-list">{children}</ol>;
}

export function UnorderedList({ className, children }: PrimitiveBaseProps) {
  return <ul className={primitiveClass("unordered-list", className)} data-mdwrk-primitive="unordered-list">{children}</ul>;
}

export function TaskList({ className, children }: PrimitiveBaseProps) {
  return <ul className={primitiveClass("task-list", className)} data-mdwrk-primitive="task-list">{children}</ul>;
}

export interface TodoListItem {
  label: React.ReactNode;
  done?: boolean;
}

export function TodoList({ className, items }: { className?: string; items: TodoListItem[] }) {
  return (
    <ul className={primitiveClass("todo-list", className)} data-mdwrk-primitive="todo-list">
      {items.map((item, index) => (
        <li key={index} className={primitiveClass("todo-item", undefined, item.done && "done")}>
          <label className="mdwrk-primitive__todo-option">
            <input type="checkbox" checked={item.done === true} readOnly />
            <span>{item.label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}
