import React from "react";
import {
  Accordion,
  AccordionItem,
  ActionRail,
  Alert,
  ArticleBlock,
  AddressField,
  AddressFieldSet,
  AudioPlayer,
  Badge,
  Bookmark,
  Bubble,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Card as PrimitiveCard,
  CardBody,
  CardFooter,
  CardGrid,
  CardHeader,
  Cards,
  ChatPrompt,
  CheckboxField,
  CheckboxGroup,
  Cluster,
  CodeBlock,
  ColorPicker,
  ConsoleFooter,
  DataTable,
  DateField,
  DateRangeField,
  DateTimeField,
  DateTimeRangeField,
  DecimalQuantityField,
  Dialog,
  DurationField,
  EmailField,
  Explorer,
  Fab,
  Favorite,
  FilterBar,
  FileDropzone,
  FirstNameField,
  Gallery,
  Grid,
  Gutter,
  Icon,
  IconButton,
  IconButtonGroup,
  IconGrid,
  ImageFrame,
  IntegerQuantityField,
  JsonPreview,
  LastNameField,
  Map,
  MapBeacon,
  MapBox,
  MapPath,
  MapPoint,
  MiddleNameField,
  Modal,
  NameFieldSet,
  Navbar,
  NavItem,
  OrderedList,
  Pagination,
  Pane,
  Pill,
  Popover,
  Progress,
  RadioGroup,
  SearchField as PrimitiveSearchField,
  SecretField,
  SelectField as PrimitiveSelectField,
  Sheet,
  Split,
  Spinner,
  Stack,
  StarRating,
  StatusDot,
  Surface,
  TableOfContents,
  TaggedCrudField,
  TaskList,
  TelephoneField,
  TextArea,
  TextCompletionField,
  TextInput,
  TimePickerField,
  TimeRangeField,
  Toast,
  TodoList,
  ToggleSection,
  Toolbar,
  Tooltip,
  Tabs,
  Tree,
  UnorderedList,
  UrlField,
  VideoFrame,
  ViewToggle,
  WebsiteField,
} from "@mdwrk/lander-primitives";

const createElement = React.createElement;
export const primitiveSlug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const primitiveCodeSample = `export function PrimitiveDemo() {
  return <Button variant="primary" tone="accent">Run audit</Button>;
}`;

const primitiveJsonSample = {
  "@type": "WebPage",
  name: "Primitive gallery",
  components: ["Card", "Badge", "JsonPreview"],
};

export const primitiveGroups = [
  {
    family: "Actions",
    description: "Buttons, grouped actions, toolbars, rails, and floating action affordances.",
    entries: [
      {
        name: "Button",
        description: "Hierarchy via variant and meaning via tone.",
        render: () =>
          createElement(
            Stack,
            null,
            createElement(
              ButtonGroup,
              null,
              createElement(Button, { variant: "primary" }, "Primary"),
              createElement(Button, { variant: "secondary" }, "Secondary"),
              createElement(Button, { variant: "ghost" }, "Ghost"),
            ),
            createElement(
              ButtonGroup,
              null,
              createElement(Button, { tone: "accent" }, "Accent"),
              createElement(Button, { tone: "success" }, "Success"),
              createElement(Button, { tone: "warning" }, "Warning"),
              createElement(Button, { tone: "danger" }, "Danger"),
            ),
            createElement(
              ButtonGroup,
              null,
              createElement(Button, { variant: "secondary", disabled: true }, "Disabled"),
            ),
          ),
      },
      {
        name: "ButtonGroup",
        description: "Inline grouping container for related actions.",
        render: () =>
          createElement(
            ButtonGroup,
            null,
            createElement(Button, null, "One"),
            createElement(Button, null, "Two"),
            createElement(Button, null, "Three"),
          ),
      },
      {
        name: "IconButton",
        description: "Icon-only action with an accessible label.",
        render: () => createElement(IconButton, { label: "Open settings", iconName: "settings" }),
      },
      {
        name: "IconButtonGroup",
        description: "Compact grouped icon actions for dense command clusters.",
        render: () =>
          createElement(
            IconButtonGroup,
            null,
            createElement(IconButton, { label: "Bold", iconName: "format_bold" }),
            createElement(IconButton, { label: "Italic", iconName: "format_italic" }),
            createElement(IconButton, { label: "Link", iconName: "link" }),
          ),
      },
      {
        name: "Toolbar",
        description: "Grouped command surface with toolbar semantics.",
        render: () =>
          createElement(
            Toolbar,
            { "aria-label": "Primitive demo toolbar" },
            createElement(Button, { variant: "primary" }, "Publish"),
            createElement(Button, null, "Preview"),
            createElement(IconButton, { label: "More options", iconName: "more_vert" }),
          ),
      },
      {
        name: "ActionRail",
        description: "Vertical rail for stacked actions.",
        render: () =>
          createElement(
            ActionRail,
            null,
            createElement(IconButton, { label: "Inspect", iconName: "search" }),
            createElement(IconButton, { label: "Pin", iconName: "push_pin" }),
          ),
      },
      {
        name: "Fab",
        description: "Floating action button for the highest-priority action.",
        render: () => createElement(Fab, { variant: "primary", "aria-label": "Create" }, "+"),
      },
    ],
  },
  {
    family: "Content",
    description: "Cards, card sections, card layouts, prose blocks, code, JSON, tables, lists, task surfaces, and to-do states.",
    entries: [
      {
        name: "Card",
        description: "Contained content shell with title and footer slots.",
        render: () =>
          createElement(
            PrimitiveCard,
            { title: "Primitive card", footer: "Footer slot" },
            createElement("p", null, "Readable body content inside a reusable surface."),
          ),
      },
      {
        name: "CardHeader",
        description: "Structured header region for card titles and metadata.",
        render: () =>
          createElement(
            PrimitiveCard,
            null,
            createElement(CardHeader, null, createElement("strong", null, "Schema artifact"), createElement("span", null, "Type surface")),
            createElement(CardBody, null, createElement("p", null, "Header can stand on its own as a composable primitive.")),
          ),
      },
      {
        name: "CardBody",
        description: "Primary content region for the main card specimen.",
        render: () =>
          createElement(
            PrimitiveCard,
            null,
            createElement(CardBody, null, createElement("p", null, "Card bodies own readable copy, examples, and structured detail.")),
          ),
      },
      {
        name: "CardFooter",
        description: "Footer region for actions, notes, and secondary metadata.",
        render: () =>
          createElement(
            PrimitiveCard,
            null,
            createElement(CardBody, null, createElement("p", null, "Footer content stays visually subordinate.")),
            createElement(CardFooter, null, createElement("span", null, "Last reviewed today")),
          ),
      },
      {
        name: "Cards",
        description: "Stacked card collection container for grouped card specimens.",
        render: () =>
          createElement(
            Cards,
            null,
            createElement(PrimitiveCard, { title: "First card" }, createElement("p", null, "Primary grouped surface.")),
            createElement(PrimitiveCard, { title: "Second card" }, createElement("p", null, "Secondary grouped surface.")),
          ),
      },
      {
        name: "CardGrid",
        description: "Responsive card layout for equal-weight card sets.",
        render: () =>
          createElement(
            CardGrid,
            null,
            createElement(PrimitiveCard, { title: "Alpha" }, createElement("p", null, "First grid item.")),
            createElement(PrimitiveCard, { title: "Beta" }, createElement("p", null, "Second grid item.")),
            createElement(PrimitiveCard, { title: "Gamma" }, createElement("p", null, "Third grid item.")),
          ),
      },
      {
        name: "ArticleBlock",
        description: "Prose-first article wrapper.",
        render: () => createElement(ArticleBlock, null, createElement("p", null, "Readable body content inside a reusable surface.")),
      },
      {
        name: "CodeBlock",
        description: "Monospace preview for source code.",
        render: () => createElement(CodeBlock, { language: "tsx", code: primitiveCodeSample }),
      },
      {
        name: "JsonPreview",
        description: "Structured JSON preview surface.",
        render: () => createElement(JsonPreview, { value: primitiveJsonSample }),
      },
      {
        name: "DataTable",
        description: "Tabular primitive with column ownership.",
        render: () =>
          createElement(DataTable, {
            columns: ["Primitive", "Family", "Status"],
            rows: [
              { Primitive: "Badge", Family: "Feedback", Status: "Active" },
              { Primitive: "Tabs", Family: "Navigation", Status: "Active" },
            ],
          }),
      },
      {
        name: "TableOfContents",
        description: "Simple navigational content index.",
        render: () =>
          createElement(
            TableOfContents,
            null,
            createElement("a", { href: "#primitive-actions" }, "Actions"),
            createElement("a", { href: "#primitive-content" }, "Content"),
            createElement("a", { href: "#primitive-navigation" }, "Navigation"),
          ),
      },
      {
        name: "OrderedList",
        description: "Ordered content list surface.",
        render: () =>
          createElement(OrderedList, null, createElement("li", null, "Define contract"), createElement("li", null, "Render component")),
      },
      {
        name: "UnorderedList",
        description: "Unordered content list surface.",
        render: () =>
          createElement(UnorderedList, null, createElement("li", null, "Keyboard-safe"), createElement("li", null, "Token-backed")),
      },
      {
        name: "TaskList",
        description: "Checklist-like task surface.",
        render: () =>
          createElement(
            TaskList,
            null,
            createElement(
              "li",
              null,
              createElement(
                "label",
                null,
                createElement("input", { type: "checkbox", checked: true, readOnly: true }),
                createElement("span", null, "T0 covered"),
              ),
            ),
            createElement(
              "li",
              null,
              createElement(
                "label",
                null,
                createElement("input", { type: "checkbox", checked: true, readOnly: true }),
                createElement("span", null, "T1 covered"),
              ),
            ),
          ),
      },
      {
        name: "TodoList",
        description: "To-do list with checkbox state and strike-through on completion.",
        render: () => createElement(TodoList, { items: [{ label: "Ship primitive docs", done: true }, { label: "Add screenshot routes", done: false }] }),
      },
    ],
  },
  {
    family: "Feedback",
    description: "Badges, pills, alerts, toasts, progress, status indicators, loading, ratings, and saved states.",
    entries: [
      {
        name: "Badge",
        description: "Compact label surface with tone variants.",
        render: () =>
          createElement(
            Cluster,
            null,
            createElement(Badge, { tone: "success" }, "Ready"),
            createElement(Badge, { tone: "warning" }, "Review"),
          ),
      },
      {
        name: "Pill",
        description: "Rounded chip surface for compact metadata.",
        render: () =>
          createElement(
            Cluster,
            null,
            createElement(Pill, { tone: "info" }, "Generated"),
            createElement(Pill, { tone: "danger" }, "Blocked"),
          ),
      },
      {
        name: "Alert",
        description: "Inline status messaging surface.",
        render: () =>
          createElement(Alert, { title: "Alert", tone: "info" }, "Primitive tokens are loaded for both themes."),
      },
      {
        name: "Toast",
        description: "Transient notification surface.",
        render: () => createElement(Toast, { title: "Toast", tone: "success" }, "Demo state is linkable."),
      },
      {
        name: "Progress",
        description: "Progress indicator with accessible label.",
        render: () => createElement(Progress, { value: 68, label: "Primitive migration progress" }),
      },
      {
        name: "StatusDot",
        description: "Compact state marker.",
        render: () =>
          createElement(Cluster, null, createElement(StatusDot, { tone: "success" }, "Online"), createElement(StatusDot, { tone: "warning" }, "Queued")),
      },
      {
        name: "Spinner",
        description: "Loading indicator for pending asynchronous work.",
        render: () => createElement(Spinner, { label: "Loading preview" }),
      },
      {
        name: "StarRating",
        description: "Compact star-based rating surface.",
        render: () => createElement(StarRating, { value: 4, label: "Four star rating" }),
      },
      {
        name: "Bookmark",
        description: "Saved-state toggle for bookmarks.",
        render: () => createElement(Bookmark, { active: true }, "Bookmarked"),
      },
      {
        name: "Favorite",
        description: "Preference-state toggle for favorites.",
        render: () => createElement(Favorite, { active: true }, "Favorited"),
      },
    ],
  },
  {
    family: "Forms",
    description: "Search, identity, contact, address, completion, tagged CRUD, quantity, calendar, clock, options, file, chat prompt, color, and disclosure controls.",
    entries: [
      {
        name: "SearchField",
        description: "Search input with shared primitive labeling.",
        render: () => createElement(PrimitiveSearchField, { label: "Search primitives", placeholder: "card, tabs, json", trailingIcon: createElement(Icon, { name: "tune", decorative: true }) }),
      },
      {
        name: "FilterBar",
        description: "Shared shell for clustered filtering controls.",
        render: () =>
          createElement(
            FilterBar,
            null,
            createElement(PrimitiveSearchField, { label: "Search primitives", placeholder: "card, tabs, json" }),
            createElement(PrimitiveSelectField, {
              label: "Family",
              defaultValue: "all",
              leadingIcon: createElement(Icon, { name: "folder", decorative: true }),
              options: [{ value: "all", label: "All families" }, { value: "forms", label: "Forms" }],
            }),
          ),
      },
      {
        name: "SelectField",
        description: "Native select with shared primitive labeling.",
        render: () =>
          createElement(PrimitiveSelectField, {
            label: "Family",
            defaultValue: "all",
            leadingIcon: createElement(Icon, { name: "category", decorative: true }),
            options: [{ value: "all", label: "All families" }, { value: "forms", label: "Forms" }],
          }),
      },
      {
        name: "TextInput",
        description: "Single-line text entry field.",
        render: () => createElement(TextInput, { label: "Title", defaultValue: "Primitive contract", leadingIcon: createElement(Icon, { name: "title", decorative: true }), trailingIcon: createElement(Icon, { name: "edit", decorative: true }) }),
      },
      {
        name: "FirstNameField",
        description: "Dedicated first-name input with person autofill semantics.",
        render: () => createElement(FirstNameField, { defaultValue: "Ada" }),
      },
      {
        name: "MiddleNameField",
        description: "Dedicated middle-name or middle-initial input.",
        render: () => createElement(MiddleNameField, { defaultValue: "M." }),
      },
      {
        name: "LastNameField",
        description: "Dedicated family-name input with person autofill semantics.",
        render: () => createElement(LastNameField, { defaultValue: "Lovelace" }),
      },
      {
        name: "NameFieldSet",
        description: "Three-part identity fieldset for first, middle, and last name entry.",
        render: () =>
          createElement(NameFieldSet, {
            firstNameProps: { defaultValue: "Ada" },
            middleNameProps: { defaultValue: "M." },
            lastNameProps: { defaultValue: "Lovelace" },
          }),
      },
      {
        name: "EmailField",
        description: "Email-address input with semantic keyboard and autofill behavior.",
        render: () => createElement(EmailField, { defaultValue: "ada@example.org" }),
      },
      {
        name: "TelephoneField",
        description: "Telephone input with telephony keyboard semantics.",
        render: () => createElement(TelephoneField, { defaultValue: "+1 (512) 555-0142" }),
      },
      {
        name: "UrlField",
        description: "Direct URL entry field for arbitrary links.",
        render: () => createElement(UrlField, { label: "Profile URL", defaultValue: "https://example.org/profiles/ada" }),
      },
      {
        name: "WebsiteField",
        description: "Website-focused URL entry field for homepages and domains.",
        render: () => createElement(WebsiteField, { defaultValue: "https://mdwrk.dev" }),
      },
      {
        name: "SecretField",
        description: "Password or token input with secret entry semantics.",
        render: () => createElement(SecretField, { label: "API secret", defaultValue: "top-secret-token" }),
      },
      {
        name: "AddressField",
        description: "Single structured address-line input.",
        render: () => createElement(AddressField, { defaultValue: "1200 Innovation Way" }),
      },
      {
        name: "AddressFieldSet",
        description: "Full postal-address fieldset for street, locality, region, postal code, and country.",
        render: () =>
          createElement(AddressFieldSet, {
            addressLine1Props: { defaultValue: "1200 Innovation Way" },
            addressLine2Props: { defaultValue: "Suite 300" },
            cityProps: { defaultValue: "Austin" },
            regionProps: { defaultValue: "Texas" },
            postalCodeProps: { defaultValue: "78701" },
            countryProps: { defaultValue: "United States" },
          }),
      },
      {
        name: "TextCompletionField",
        description: "Text input with datalist-style completion suggestions.",
        render: () =>
          createElement(TextCompletionField, {
            label: "Schema type",
            defaultValue: "Art",
            leadingIcon: createElement(Icon, { name: "category_search", decorative: true }),
            options: [{ value: "Article", label: "Article" }, { value: "Artist", label: "Artist" }, { value: "Artwork", label: "Artwork" }],
          }),
      },
      {
        name: "TaggedCrudField",
        description: "Editable tag list with add and remove affordances.",
        render: () => createElement(TaggedCrudField, { label: "Keywords", tags: ["schema", "json-ld", "primitives"], defaultValue: "landing-page" }),
      },
      {
        name: "TextArea",
        description: "Multi-line text entry field.",
        render: () => createElement(TextArea, { label: "Notes", defaultValue: "Use shared surfaces inside fused components.", rows: 3 }),
      },
      {
        name: "IntegerQuantityField",
        description: "Whole-number quantity field.",
        render: () => createElement(IntegerQuantityField, { label: "Seats", defaultValue: 12, min: 0, leadingIcon: createElement(Icon, { name: "groups", decorative: true }) }),
      },
      {
        name: "DecimalQuantityField",
        description: "Decimal quantity field.",
        render: () => createElement(DecimalQuantityField, { label: "Price", defaultValue: 49.95, min: 0 }),
      },
      {
        name: "DateField",
        description: "Calendar date picker field.",
        render: () => createElement(DateField, { label: "Start date", defaultValue: "2026-06-02", leadingIcon: createElement(Icon, { name: "event_available", decorative: true }) }),
      },
      {
        name: "DateTimeField",
        description: "Calendar date and time picker field.",
        render: () => createElement(DateTimeField, { label: "Publish at", defaultValue: "2026-06-02T09:30" }),
      },
      {
        name: "DateRangeField",
        description: "Calendar date range field.",
        render: () =>
          createElement(DateRangeField, {
            label: "Travel dates",
            startProps: { defaultValue: "2026-06-10" },
            endProps: { defaultValue: "2026-06-18" },
          }),
      },
      {
        name: "DateTimeRangeField",
        description: "Calendar datetime range field.",
        render: () =>
          createElement(DateTimeRangeField, {
            label: "Maintenance window",
            startProps: { defaultValue: "2026-06-02T09:00" },
            endProps: { defaultValue: "2026-06-02T11:00" },
          }),
      },
      {
        name: "TimePickerField",
        description: "Clock-based time picker field.",
        render: () => createElement(TimePickerField, { label: "Start time", defaultValue: "09:30", leadingIcon: createElement(Icon, { name: "schedule", decorative: true }) }),
      },
      {
        name: "TimeRangeField",
        description: "Clock-based time range field.",
        render: () =>
          createElement(TimeRangeField, {
            label: "Office hours",
            startProps: { defaultValue: "09:00" },
            endProps: { defaultValue: "17:00" },
          }),
      },
      {
        name: "DurationField",
        description: "Duration field for elapsed time values.",
        render: () => createElement(DurationField, { label: "Duration", defaultValue: "PT1H30M" }),
      },
      {
        name: "ColorPicker",
        description: "Color input control rendered as a swatch.",
        render: () => createElement(ColorPicker, { label: "Accent", defaultValue: "#2f735f" }),
      },
      {
        name: "CheckboxField",
        description: "Single checkbox option field.",
        render: () => createElement(CheckboxField, { label: "Feature flag", defaultChecked: true }, "Enabled"),
      },
      {
        name: "RadioGroup",
        description: "Single-option choice group.",
        render: () =>
          createElement(RadioGroup, {
            label: "Delivery",
            value: "standard",
            options: [
              { value: "standard", label: "Standard", hint: "3 to 5 days" },
              { value: "express", label: "Express", hint: "Next day" },
            ],
          }),
      },
      {
        name: "CheckboxGroup",
        description: "Multi-option checkbox group.",
        render: () =>
          createElement(CheckboxGroup, {
            label: "Channels",
            values: ["email", "sms"],
            options: [
              { value: "email", label: "Email" },
              { value: "sms", label: "SMS" },
              { value: "push", label: "Push" },
            ],
          }),
      },
      {
        name: "FileDropzone",
        description: "File input surface for uploads.",
        render: () => createElement(FileDropzone, { label: "Upload proof artifact" }),
      },
      {
        name: "ChatPrompt",
        description: "Chat input surface with multi-file attachments.",
        render: () =>
          createElement(ChatPrompt, {
            label: "Chat prompt",
            defaultValue: "Please compare these specimens and summarize the differences.",
            attachments: [
              { name: "schema.json", kind: "JSON" },
              { name: "wireframe.png", kind: "Image" },
              { name: "notes.md", kind: "Text" },
            ],
          }),
      },
      {
        name: "ToggleSection",
        description: "Expandable disclosure surface.",
        render: () => createElement(ToggleSection, { title: "Primitive details", open: true }, createElement("p", null, "Disclosure content stays token-backed.")),
      },
    ],
  },
  {
    family: "Navigation",
    description: "Tabs, breadcrumbs, pagination, accordions, nav bars, trees, explorers, and view toggles.",
    entries: [
      {
        name: "Tabs",
        description: "Switchable navigation group with tab semantics.",
        render: () => createElement(Tabs, { items: [{ value: "one", label: "One" }, { value: "two", label: "Two" }], value: "one" }),
      },
      {
        name: "Accordion",
        description: "Multi-section disclosure container.",
        render: () =>
          createElement(
            Accordion,
            null,
            createElement(AccordionItem, { title: "Section one", open: true, leadingIcon: createElement(Icon, { name: "description", decorative: true }), trailingIcon: createElement(Icon, { name: "expand_more", decorative: true }) }, createElement("p", null, "Accordion content block one.")),
            createElement(AccordionItem, { title: "Section two", leadingIcon: createElement(Icon, { name: "inventory_2", decorative: true }), trailingIcon: createElement(Icon, { name: "chevron_right", decorative: true }) }, createElement("p", null, "Accordion content block two.")),
          ),
      },
      {
        name: "AccordionItem",
        description: "Single accordion section with summary and panel.",
        render: () => createElement(AccordionItem, { title: "Section one", open: true, leadingIcon: createElement(Icon, { name: "article", decorative: true }), trailingIcon: createElement(Icon, { name: "expand_less", decorative: true }) }, createElement("p", null, "Accordion content block one.")),
      },
      {
        name: "Breadcrumbs",
        description: "Location trail for hierarchical navigation.",
        render: () => createElement(Breadcrumbs, { items: [{ label: "Demo", href: "?" }, { label: "Primitives" }] }),
      },
      {
        name: "Navbar",
        description: "Primary navigation bar shell.",
        render: () =>
          createElement(
            Navbar,
            null,
            createElement(NavItem, { href: "#overview", active: true, leadingIcon: createElement(Icon, { name: "home", decorative: true }) }, "Overview"),
            createElement(NavItem, { href: "#components", leadingIcon: createElement(Icon, { name: "widgets", decorative: true }) }, "Components"),
            createElement(NavItem, { href: "#tokens", leadingIcon: createElement(Icon, { name: "palette", decorative: true }), trailingIcon: createElement(Icon, { name: "open_in_new", decorative: true }) }, "Tokens"),
          ),
      },
      {
        name: "NavItem",
        description: "Individual navigation item with active state.",
        render: () => createElement(NavItem, { href: "#overview", active: true, leadingIcon: createElement(Icon, { name: "home", decorative: true }), trailingIcon: createElement(Icon, { name: "chevron_right", decorative: true }) }, "Overview"),
      },
      {
        name: "Pagination",
        description: "Page navigation control.",
        render: () => createElement(Pagination, { page: 2, pageCount: 5 }),
      },
      {
        name: "Tree",
        description: "Hierarchical tree surface.",
        render: () => createElement(Tree, null, createElement("div", { role: "treeitem" }, "packages/40-react-renderers"), createElement("div", { role: "treeitem" }, "packages/70-demos/demo")),
      },
      {
        name: "Explorer",
        description: "Container for structured navigation or inspector views.",
        render: () => createElement(Explorer, null, createElement("div", null, "Explorer panel")),
      },
      {
        name: "ViewToggle",
        description: "View-mode toggle with tab-like affordance.",
        render: () => createElement(ViewToggle, { items: [{ value: "cards", label: "Cards" }, { value: "table", label: "Table" }], value: "cards" }),
      },
    ],
  },
  {
    family: "Media",
    description: "Icon, image, video, audio, gallery, icon-grid, and map primitives.",
    entries: [
      {
        name: "Icon",
        description: "Single icon surface with accessible labeling.",
        render: () => createElement(Icon, { name: "home", label: "Home" }),
      },
      {
        name: "ImageFrame",
        description: "Framed image surface with placeholder fallback.",
        render: () => createElement(ImageFrame, null, createElement("span", null, "Image")),
      },
      {
        name: "VideoFrame",
        description: "Framed video surface with placeholder fallback.",
        render: () => createElement(VideoFrame, null, createElement("span", null, "Video preview")),
      },
      {
        name: "AudioPlayer",
        description: "Audio player surface with placeholder fallback.",
        render: () => createElement(AudioPlayer, null, createElement("span", null, "Audio preview")),
      },
      {
        name: "Gallery",
        description: "Media gallery layout shell.",
        render: () =>
          createElement(
            Gallery,
            null,
            createElement(ImageFrame, null, createElement("span", null, "Image")),
            createElement(ImageFrame, null, createElement("span", null, "Diagram")),
          ),
      },
      {
        name: "IconGrid",
        description: "Grid layout for compact icon sets.",
        render: () =>
          createElement(
            IconGrid,
            null,
            createElement(Icon, { name: "home", label: "Home" }),
            createElement(Icon, { name: "school", label: "School" }),
            createElement(Icon, { name: "database", label: "Database" }),
          ),
      },
      {
        name: "Map",
        description: "Map canvas shell for geographic specimens.",
        render: () => createElement(Map, null, "Regional route overview"),
      },
      {
        name: "MapPoint",
        description: "Point marker primitive for map annotations.",
        render: () => createElement(MapPoint, null, "Warehouse"),
      },
      {
        name: "MapPath",
        description: "Path marker primitive for routes and traces.",
        render: () => createElement(MapPath, null, "Delivery route"),
      },
      {
        name: "MapBox",
        description: "Viewport or selection box primitive for map regions.",
        render: () => createElement(MapBox, null, "Austin metro"),
      },
      {
        name: "MapBeacon",
        description: "Beacon marker primitive for live or active points.",
        render: () => createElement(MapBeacon, null, "Live beacon"),
      },
    ],
  },
  {
    family: "Overlays",
    description: "Dialog, modal, sheet, popover, tooltip, chat bubbles, and console footer surfaces.",
    entries: [
      {
        name: "Dialog",
        description: "Dialog surface rendered inline for deterministic screenshots.",
        render: () => createElement(Dialog, { title: "Dialog" }, createElement("p", null, "Modal content surface.")),
      },
      {
        name: "Modal",
        description: "Modal surface with a scrim and centered dialog shell.",
        render: () =>
          createElement(
            Modal,
            {
              title: "Modal",
              footer: createElement(ButtonGroup, null, createElement(Button, { variant: "ghost" }, "Cancel"), createElement(Button, { variant: "primary" }, "Confirm")),
            },
            createElement("p", null, "Focused modal content surface."),
          ),
      },
      {
        name: "Sheet",
        description: "Sheet surface rendered inline for deterministic screenshots.",
        render: () => createElement(Sheet, { title: "Sheet" }, createElement("p", null, "Side-panel content surface.")),
      },
      {
        name: "Popover",
        description: "Small contextual overlay surface.",
        render: () => createElement(Popover, null, "Popover content"),
      },
      {
        name: "Tooltip",
        description: "Compact hover/help surface for inline guidance.",
        render: () => createElement(Tooltip, { label: "Schema-backed explanation" }, createElement(Button, { variant: "ghost" }, "Hover target")),
      },
      {
        name: "Bubble",
        description: "Chat-like bubble specimen rendered as a two-party conversation.",
        render: () =>
          createElement(
            Stack,
            null,
            createElement(Bubble, null, createElement("strong", null, "Assistant"), createElement("p", null, "I found three mismatched schema fields.")),
            createElement(Bubble, { className: "semantic-demo__bubble--reply" }, createElement("strong", null, "Reviewer"), createElement("p", null, "Patch them and attach the updated screenshots.")),
          ),
      },
      {
        name: "ConsoleFooter",
        description: "Footer console/status strip.",
        render: () => createElement(ConsoleFooter, null, createElement(StatusDot, { tone: "success" }, "Synced"), createElement("span", null, "Primitive audit ready")),
      },
    ],
  },
  {
    family: "Layout",
    description: "Stack, cluster, split, grid, pane, surface, and gutter containers.",
    entries: [
      {
        name: "Stack",
        description: "Vertical rhythm layout shell.",
        render: () =>
          createElement(Stack, null, createElement("p", null, "Stacked content block"), createElement("p", null, "Second content block")),
      },
      {
        name: "Cluster",
        description: "Wrapping inline cluster layout shell.",
        render: () => createElement(Cluster, null, createElement(Pill, null, "One"), createElement(Pill, null, "Two"), createElement(Pill, null, "Three")),
      },
      {
        name: "Split",
        description: "Two-panel layout shell.",
        render: () => createElement(Split, null, createElement(Pane, null, "Primary"), createElement(Pane, null, "Secondary")),
      },
      {
        name: "Grid",
        description: "Multi-item grid layout shell.",
        render: () => createElement(Grid, null, createElement(Pane, null, "Pane A"), createElement(Pane, null, "Pane B")),
      },
      {
        name: "Pane",
        description: "Contained pane surface.",
        render: () => createElement(Pane, null, "Pane content"),
      },
      {
        name: "Surface",
        description: "Generic surfaced container.",
        render: () => createElement(Surface, null, "Surface"),
      },
      {
        name: "Gutter",
        description: "Safe horizontal padding container.",
        render: () =>
          createElement(Gutter, null, createElement(Pane, null, "Guttered pane content")),
      },
    ],
  },
];

export const primitiveEntries = primitiveGroups.flatMap((group) =>
  group.entries.map((entry) => ({
    ...entry,
    family: group.family,
    familySlug: primitiveSlug(group.family),
    slug: primitiveSlug(entry.name),
  })),
);

function PrimitiveExampleCard({ entry, buildHref }) {
  return createElement(
    PrimitiveCard,
    {
      className: `semantic-demo__primitive-card semantic-demo__primitive-card--${primitiveSlug(entry.name)}`,
      id: `primitive-${primitiveSlug(entry.name)}`,
    },
    createElement(
      "header",
      { className: "semantic-demo__primitive-card-header" },
      createElement("h3", { className: "mdwrk-primitive__text-fit-heading" }, entry.name),
      createElement("hr", { className: "semantic-demo__primitive-rule" }),
      createElement("p", { className: "mdwrk-primitive__text-fit-preview" }, entry.description),
    ),
    createElement(
      "dl",
      { className: "semantic-demo__index-meta" },
      createElement("div", null, createElement("dt", null, "Family"), createElement("dd", null, entry.family)),
      createElement("div", null, createElement("dt", null, "Marker"), createElement("dd", null, createElement("code", null, entry.slug))),
    ),
    buildHref
      ? createElement("a", { className: "semantic-demo__detail-link", href: buildHref(entry) }, "Open detail page")
      : null,
  );
}

export function PrimitiveGallery({ buildHref }) {
  return createElement(
    React.Fragment,
    null,
    ...primitiveGroups.map((group) =>
      createElement(
        "section",
        {
          className: `semantic-demo__family semantic-demo__primitive-family semantic-demo__primitive-family--${primitiveSlug(group.family)}`,
          id: `primitive-${primitiveSlug(group.family)}`,
          key: group.family,
        },
        createElement(
          "header",
          { className: "semantic-demo__family-header" },
          createElement(
            "div",
            null,
            createElement("p", { className: "semantic-demo__kicker" }, `${group.family} primitives`),
            createElement("h2", null, `${group.entries.length} primitive examples`),
          ),
          createElement("p", null, group.description),
        ),
        createElement(
          "div",
          { className: "semantic-demo__primitive-grid" },
          ...group.entries.map((entry) => createElement(PrimitiveExampleCard, { buildHref, entry, key: `${group.family}-${entry.name}` })),
        ),
      ),
    ),
  );
}
