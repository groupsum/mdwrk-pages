import React from "react";
import { Icon } from "./media.js";
import { primitiveClass } from "./shared.js";

export interface FieldShellProps {
  label: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  primitiveName?: string;
}

function FieldShell({ label, className, children, primitiveName = "field" }: FieldShellProps) {
  return <label className={primitiveClass("field", className)} data-mdwrk-primitive={primitiveName}><span className="mdwrk-primitive__label mdwrk-primitive__text-fit-preserve">{label}</span>{children}</label>;
}

interface FieldAdornmentProps {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

interface TypedTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  className?: string;
  primitiveName: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

type SpecializedTextFieldProps = Omit<TypedTextFieldProps, "primitiveName" | "type" | "label"> & {
  label?: React.ReactNode;
};

function FieldControlShell({ leadingIcon, trailingIcon, children }: FieldAdornmentProps & { children: React.ReactNode }) {
  if (!leadingIcon && !trailingIcon) return <>{children}</>;
  return (
    <span className="mdwrk-primitive__field-control-shell">
      {leadingIcon ? <span className="mdwrk-primitive__field-adornment mdwrk-primitive__field-adornment--leading">{leadingIcon}</span> : null}
      {children}
      {trailingIcon ? <span className="mdwrk-primitive__field-adornment mdwrk-primitive__field-adornment--trailing">{trailingIcon}</span> : null}
    </span>
  );
}

function TypedTextField({ className, label, primitiveName, leadingIcon, trailingIcon, ...props }: TypedTextFieldProps) {
  return (
    <FieldShell label={label} className={primitiveClass(primitiveName, className)} primitiveName={primitiveName}>
      <FieldControlShell leadingIcon={leadingIcon} trailingIcon={trailingIcon}>
        <input {...props} className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" />
      </FieldControlShell>
    </FieldShell>
  );
}

export function TextInput({ className, label, leadingIcon, trailingIcon, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: React.ReactNode } & FieldAdornmentProps) {
  return <FieldShell label={label} className={primitiveClass("text-input", className)} primitiveName="text-input"><FieldControlShell leadingIcon={leadingIcon} trailingIcon={trailingIcon}><input {...props} className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" /></FieldControlShell></FieldShell>;
}

export function FirstNameField({ label = "First name", leadingIcon = <Icon name="badge" decorative />, autoComplete = "given-name", ...props }: SpecializedTextFieldProps) {
  return <TypedTextField {...props} label={label} primitiveName="first-name-field" autoComplete={autoComplete} leadingIcon={leadingIcon} />;
}

export function MiddleNameField({ label = "Middle", autoComplete = "additional-name", ...props }: SpecializedTextFieldProps) {
  return <TypedTextField {...props} label={label} primitiveName="middle-name-field" autoComplete={autoComplete} />;
}

export function LastNameField({ label = "Last name", leadingIcon = <Icon name="badge" decorative />, autoComplete = "family-name", ...props }: SpecializedTextFieldProps) {
  return <TypedTextField {...props} label={label} primitiveName="last-name-field" autoComplete={autoComplete} leadingIcon={leadingIcon} />;
}

export interface NameFieldSetProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  firstNameProps?: React.InputHTMLAttributes<HTMLInputElement>;
  middleNameProps?: React.InputHTMLAttributes<HTMLInputElement>;
  lastNameProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export function NameFieldSet({ className, label = "Name", firstNameProps, middleNameProps, lastNameProps, ...props }: NameFieldSetProps) {
  return (
    <FieldShell label={label} className={primitiveClass("name-field-set", className)} primitiveName="name-field-set">
      <div {...props} className="mdwrk-primitive__fieldset-grid mdwrk-primitive__fieldset-grid--name">
        <FirstNameField {...firstNameProps} />
        <MiddleNameField {...middleNameProps} />
        <LastNameField {...lastNameProps} />
      </div>
    </FieldShell>
  );
}

export function TextArea({ className, label, leadingIcon, trailingIcon, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: React.ReactNode } & FieldAdornmentProps) {
  return <FieldShell label={label} className={primitiveClass("text-area", className)} primitiveName="text-area"><FieldControlShell leadingIcon={leadingIcon} trailingIcon={trailingIcon}><textarea {...props} className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" /></FieldControlShell></FieldShell>;
}

export interface SelectOption {
  value: string;
  label: React.ReactNode;
}

export interface ChoiceOption extends SelectOption {
  hint?: React.ReactNode;
}

export interface SelectFieldProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label: React.ReactNode;
  options: SelectOption[];
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export function SelectField({ className, label, options, leadingIcon, trailingIcon, ...props }: SelectFieldProps) {
  return (
    <FieldShell label={label} className={primitiveClass("select-field", className)} primitiveName="select-field">
      <FieldControlShell leadingIcon={leadingIcon} trailingIcon={trailingIcon}>
        <select {...props} className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve">
          {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
      </FieldControlShell>
    </FieldShell>
  );
}

export function SearchField({ className, label = "Search", leadingIcon = <Icon name="search" decorative />, trailingIcon, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label?: React.ReactNode } & FieldAdornmentProps) {
  return <FieldShell label={label} className={primitiveClass("search-field", className)} primitiveName="search-field"><FieldControlShell leadingIcon={leadingIcon} trailingIcon={trailingIcon}><input {...props} type="search" className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" /></FieldControlShell></FieldShell>;
}

export function EmailField({ label = "Email", leadingIcon = <Icon name="mail" decorative />, autoComplete = "email", ...props }: SpecializedTextFieldProps) {
  return <TypedTextField {...props} label={label} primitiveName="email-field" type="email" inputMode="email" autoComplete={autoComplete} leadingIcon={leadingIcon} />;
}

export function UrlField({ label = "URL", leadingIcon = <Icon name="link" decorative />, autoComplete = "url", ...props }: SpecializedTextFieldProps) {
  return <TypedTextField {...props} label={label} primitiveName="url-field" type="url" inputMode="url" autoComplete={autoComplete} leadingIcon={leadingIcon} />;
}

export function WebsiteField({ label = "Website", leadingIcon = <Icon name="language" decorative />, autoComplete = "url", ...props }: SpecializedTextFieldProps) {
  return <TypedTextField {...props} label={label} primitiveName="website-field" type="url" inputMode="url" autoComplete={autoComplete} leadingIcon={leadingIcon} />;
}

export function TelephoneField({ label = "Telephone", leadingIcon = <Icon name="call" decorative />, autoComplete = "tel", ...props }: SpecializedTextFieldProps) {
  return <TypedTextField {...props} label={label} primitiveName="telephone-field" type="tel" inputMode="tel" autoComplete={autoComplete} leadingIcon={leadingIcon} />;
}

export function SecretField({ label = "Secret", leadingIcon = <Icon name="key" decorative />, autoComplete = "current-password", ...props }: SpecializedTextFieldProps) {
  return <TypedTextField {...props} label={label} primitiveName="secret-field" type="password" autoComplete={autoComplete} leadingIcon={leadingIcon} />;
}

export function AddressField({ label = "Address line", leadingIcon = <Icon name="home_pin" decorative />, autoComplete = "address-line1", ...props }: SpecializedTextFieldProps) {
  return <TypedTextField {...props} label={label} primitiveName="address-field" autoComplete={autoComplete} leadingIcon={leadingIcon} />;
}

export interface AddressFieldSetProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  addressLine1Props?: React.InputHTMLAttributes<HTMLInputElement>;
  addressLine2Props?: React.InputHTMLAttributes<HTMLInputElement>;
  cityProps?: React.InputHTMLAttributes<HTMLInputElement>;
  regionProps?: React.InputHTMLAttributes<HTMLInputElement>;
  postalCodeProps?: React.InputHTMLAttributes<HTMLInputElement>;
  countryProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export function AddressFieldSet({
  className,
  label = "Address",
  addressLine1Props,
  addressLine2Props,
  cityProps,
  regionProps,
  postalCodeProps,
  countryProps,
  ...props
}: AddressFieldSetProps) {
  return (
    <FieldShell label={label} className={primitiveClass("address-field-set", className)} primitiveName="address-field-set">
      <div {...props} className="mdwrk-primitive__fieldset-grid mdwrk-primitive__fieldset-grid--address">
        <AddressField label="Address line 1" {...addressLine1Props} />
        <AddressField label="Address line 2" autoComplete="address-line2" leadingIcon={<Icon name="apartment" decorative />} {...addressLine2Props} />
        <TypedTextField label="City" primitiveName="address-locality-field" autoComplete="address-level2" leadingIcon={<Icon name="location_city" decorative />} {...cityProps} />
        <TypedTextField label="State / region" primitiveName="address-region-field" autoComplete="address-level1" leadingIcon={<Icon name="map" decorative />} {...regionProps} />
        <TypedTextField label="Postal code" primitiveName="postal-code-field" autoComplete="postal-code" leadingIcon={<Icon name="markunread_mailbox" decorative />} {...postalCodeProps} />
        <TypedTextField label="Country" primitiveName="country-field" autoComplete="country-name" leadingIcon={<Icon name="public" decorative />} {...countryProps} />
      </div>
    </FieldShell>
  );
}

export interface TextCompletionFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  options: SelectOption[];
  listId?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export function TextCompletionField({ className, label, options, listId, id, leadingIcon, trailingIcon = <Icon name="arrow_drop_down" decorative />, ...props }: TextCompletionFieldProps) {
  const resolvedListId = listId ?? `${id ?? "mdwrk-text-completion"}-list`;
  return (
    <FieldShell label={label} className={primitiveClass("text-completion-field", className)} primitiveName="text-completion-field">
      <FieldControlShell leadingIcon={leadingIcon} trailingIcon={trailingIcon}>
        <input {...props} id={id} list={resolvedListId} className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" />
      </FieldControlShell>
      <datalist id={resolvedListId}>
        {options.map((option) => <option key={option.value} value={option.value}>{typeof option.label === "string" ? option.label : option.value}</option>)}
      </datalist>
    </FieldShell>
  );
}

export function FilterBar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={primitiveClass("filter-bar", className)} data-mdwrk-primitive="filter-bar">{children}</div>;
}

export interface TaggedCrudFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> {
  label: React.ReactNode;
  tags: string[];
  value?: string;
}

export function TaggedCrudField({ className, label, tags, value, placeholder = "Add tag", ...props }: TaggedCrudFieldProps) {
  return (
    <FieldShell label={label} className={primitiveClass("tagged-crud-field", className)} primitiveName="tagged-crud-field">
      <div className="mdwrk-primitive__tag-field-shell">
        <div className="mdwrk-primitive__tag-list">
          {tags.map((tag) => (
            <span key={tag} className="mdwrk-primitive__tag-chip">
              <span className="mdwrk-primitive__text-fit-preserve">{tag}</span>
              <button type="button" className="mdwrk-primitive__tag-action" aria-label={`Remove ${tag}`}>x</button>
            </span>
          ))}
        </div>
        <div className="mdwrk-primitive__tag-editor">
          <input {...props} value={value} placeholder={placeholder} className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" />
          <button type="button" className="mdwrk-primitive__tag-action">Add</button>
        </div>
      </div>
    </FieldShell>
  );
}

export function ColorPicker({ className, label = "Color", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label?: React.ReactNode }) {
  return (
    <FieldShell label={label} className={primitiveClass("color-picker", className)} primitiveName="color-picker">
      <span className="mdwrk-primitive__color-picker-shell">
        <input {...props} type="color" className="mdwrk-primitive__control mdwrk-primitive__control--swatch" />
      </span>
    </FieldShell>
  );
}

export function IntegerQuantityField({ className, label, step = 1, leadingIcon, trailingIcon, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: React.ReactNode } & FieldAdornmentProps) {
  return <FieldShell label={label} className={primitiveClass("integer-quantity-field", className)} primitiveName="integer-quantity-field"><FieldControlShell leadingIcon={leadingIcon} trailingIcon={trailingIcon}><input {...props} type="number" step={step} className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" /></FieldControlShell></FieldShell>;
}

export function DecimalQuantityField({ className, label, step = "0.01", leadingIcon, trailingIcon, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: React.ReactNode } & FieldAdornmentProps) {
  return <FieldShell label={label} className={primitiveClass("decimal-quantity-field", className)} primitiveName="decimal-quantity-field"><FieldControlShell leadingIcon={leadingIcon} trailingIcon={trailingIcon}><input {...props} type="number" step={step} className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" /></FieldControlShell></FieldShell>;
}

export function DateField({ className, label, leadingIcon, trailingIcon = <Icon name="calendar_today" decorative />, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: React.ReactNode } & FieldAdornmentProps) {
  return <FieldShell label={label} className={primitiveClass("date-field", className)} primitiveName="date-field"><FieldControlShell leadingIcon={leadingIcon} trailingIcon={trailingIcon}><input {...props} type="date" className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" /></FieldControlShell></FieldShell>;
}

export function DateTimeField({ className, label, leadingIcon, trailingIcon = <Icon name="event" decorative />, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: React.ReactNode } & FieldAdornmentProps) {
  return <FieldShell label={label} className={primitiveClass("datetime-field", className)} primitiveName="datetime-field"><FieldControlShell leadingIcon={leadingIcon} trailingIcon={trailingIcon}><input {...props} type="datetime-local" className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" /></FieldControlShell></FieldShell>;
}

export interface RangeFieldProps extends PrimitiveBaseRangeProps {
  label: React.ReactNode;
}

interface PrimitiveBaseRangeProps {
  className?: string;
  startLabel?: React.ReactNode;
  endLabel?: React.ReactNode;
  startProps?: React.InputHTMLAttributes<HTMLInputElement>;
  endProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

function RangeFieldShell({ primitiveName, className, label, startLabel = "Start", endLabel = "End", startProps, endProps, inputType }: RangeFieldProps & { primitiveName: string; inputType: React.HTMLInputTypeAttribute }) {
  return (
    <FieldShell label={label} className={primitiveClass(primitiveName, className)} primitiveName={primitiveName}>
      <div className="mdwrk-primitive__range-field">
        <label className="mdwrk-primitive__subfield">
          <span className="mdwrk-primitive__sublabel mdwrk-primitive__text-fit-preserve">{startLabel}</span>
          <input {...startProps} type={inputType} className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" />
        </label>
        <label className="mdwrk-primitive__subfield">
          <span className="mdwrk-primitive__sublabel mdwrk-primitive__text-fit-preserve">{endLabel}</span>
          <input {...endProps} type={inputType} className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" />
        </label>
      </div>
    </FieldShell>
  );
}

export function DateRangeField(props: RangeFieldProps) {
  return <RangeFieldShell {...props} primitiveName="date-range-field" inputType="date" />;
}

export function DateTimeRangeField(props: RangeFieldProps) {
  return <RangeFieldShell {...props} primitiveName="datetime-range-field" inputType="datetime-local" />;
}

export function TimePickerField({ className, label, leadingIcon, trailingIcon = <Icon name="schedule" decorative />, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: React.ReactNode } & FieldAdornmentProps) {
  return <FieldShell label={label} className={primitiveClass("time-picker-field", className)} primitiveName="time-picker-field"><FieldControlShell leadingIcon={leadingIcon} trailingIcon={trailingIcon}><input {...props} type="time" className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" /></FieldControlShell></FieldShell>;
}

export function TimeRangeField(props: RangeFieldProps) {
  return <RangeFieldShell {...props} primitiveName="time-range-field" inputType="time" />;
}

export function DurationField({ className, label, leadingIcon, trailingIcon = <Icon name="timer" decorative />, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: React.ReactNode } & FieldAdornmentProps) {
  return <FieldShell label={label} className={primitiveClass("duration-field", className)} primitiveName="duration-field"><FieldControlShell leadingIcon={leadingIcon} trailingIcon={trailingIcon}><input {...props} type="text" className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" placeholder={props.placeholder ?? "PT1H30M"} /></FieldControlShell></FieldShell>;
}

export function FileDropzone({ className, label = "Upload file", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label?: React.ReactNode }) {
  return <FieldShell label={label} className={primitiveClass("file-dropzone", className)} primitiveName="file-dropzone"><input {...props} type="file" className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" /></FieldShell>;
}

export function CheckboxField({ className, label, children, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: React.ReactNode }) {
  return (
    <FieldShell label={label} className={primitiveClass("checkbox-field", className)} primitiveName="checkbox-field">
      <label className="mdwrk-primitive__choice-option">
        <input {...props} type="checkbox" />
        <span className="mdwrk-primitive__text-fit-preserve">{children ?? "Checked option"}</span>
      </label>
    </FieldShell>
  );
}

export interface ChoiceGroupProps {
  className?: string;
  label: React.ReactNode;
  name?: string;
  options: ChoiceOption[];
  value?: string;
  values?: string[];
}

export function RadioGroup({ className, label, name = "mdwrk-radio-group", options, value }: ChoiceGroupProps) {
  return (
    <FieldShell label={label} className={primitiveClass("radio-group", className)} primitiveName="radio-group">
      <div className="mdwrk-primitive__choice-group" role="radiogroup">
        {options.map((option) => (
          <label key={option.value} className="mdwrk-primitive__choice-option">
            <input type="radio" name={name} value={option.value} defaultChecked={option.value === value} />
            <span className="mdwrk-primitive__text-fit-preserve">{option.label}</span>
            {option.hint ? <small className="mdwrk-primitive__choice-hint mdwrk-primitive__text-fit-preview">{option.hint}</small> : null}
          </label>
        ))}
      </div>
    </FieldShell>
  );
}

export function CheckboxGroup({ className, label, name = "mdwrk-checkbox-group", options, values = [] }: ChoiceGroupProps) {
  return (
    <FieldShell label={label} className={primitiveClass("checkbox-group", className)} primitiveName="checkbox-group">
      <div className="mdwrk-primitive__choice-group">
        {options.map((option) => (
          <label key={option.value} className="mdwrk-primitive__choice-option">
            <input type="checkbox" name={name} value={option.value} defaultChecked={values.includes(option.value)} />
            <span className="mdwrk-primitive__text-fit-preserve">{option.label}</span>
            {option.hint ? <small className="mdwrk-primitive__choice-hint mdwrk-primitive__text-fit-preview">{option.hint}</small> : null}
          </label>
        ))}
      </div>
    </FieldShell>
  );
}

export function ToggleSection({ className, title, children, ...props }: React.HTMLAttributes<HTMLDetailsElement> & { title: React.ReactNode }) {
  return <details {...props} className={primitiveClass("toggle-section", className)} data-mdwrk-primitive="toggle-section"><summary>{title}</summary>{children}</details>;
}

export interface ChatPromptAttachment {
  name: string;
  kind?: string;
}

export interface ChatPromptProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "children"> {
  className?: string;
  label?: React.ReactNode;
  attachments?: ChatPromptAttachment[];
}

export function ChatPrompt({ className, label = "Chat prompt", attachments = [], rows = 3, ...props }: ChatPromptProps) {
  return (
    <FieldShell label={label} className={primitiveClass("chat-prompt", className)} primitiveName="chat-prompt">
      <div className="mdwrk-primitive__chat-prompt">
        <textarea {...props} rows={rows} className="mdwrk-primitive__control mdwrk-primitive__text-fit-preserve" />
        {attachments.length ? (
          <div className="mdwrk-primitive__chat-attachments">
            {attachments.map((attachment) => (
              <span key={attachment.name} className="mdwrk-primitive__tag-chip">
                <span className="mdwrk-primitive__text-fit-structured">{attachment.kind ? `${attachment.kind}: ` : ""}{attachment.name}</span>
              </span>
            ))}
          </div>
        ) : null}
        <div className="mdwrk-primitive__chat-prompt-actions">
          <label className="mdwrk-primitive__tag-action">
            <span>Attach files</span>
            <input type="file" multiple className="mdwrk-primitive__sr-only" />
          </label>
          <button type="button" className="mdwrk-primitive__tag-action">Send</button>
        </div>
      </div>
    </FieldShell>
  );
}
