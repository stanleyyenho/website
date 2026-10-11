---
name: stanley ho
description: One calm, lowercase column on a cool mist ground, gutter-labelled sections, and a crimson seal with a stated accent ceiling.
colors:
  crimson: "#a8203f"
  crimson-dark: "#ec6a86"
  rose-band: "#f3d3dc"
  rose-band-dark: "rgb(236 106 134 / 0.34)"
  selection-rose: "#f6d9e0"
  selection-rose-dark: "#5a1a2a"
  mist: "#e6edf4"
  mist-dark: "#0c131c"
  deep-mist: "#d8e1eb"
  deep-mist-dark: "#141e2c"
  ink: "#111a24"
  ink-dark: "#e2e9f1"
  steel: "#506072"
  steel-dark: "#8fa0b3"
  haze: "#93a2b3"
  haze-dark: "#4b5a6c"
  frost-line: "#bfccd8"
  frost-line-dark: "#253243"
  scrim: "rgb(230 237 244 / 0.94)"
  scrim-dark: "rgb(12 19 28 / 0.95)"
typography:
  headline:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  intro:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.6
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"ss01\""
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.6
  meta:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.45
  figure:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.6
    fontFeature: "\"tnum\", \"lnum\""
  seal-glyph:
    fontFamily: "Zhi Mang Xing, Songti SC, STSong, serif"
    fontSize: "26px"
    fontWeight: 400
rounded:
  hair: "2px"
  pill: "999px"
  round: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  row: "13px"
  gutter: "136px"
  page: "720px"
  section: "80px"
  section-mobile: "56px"
  footer: "112px"
  reel-height: "380px"
  reel-height-mobile: "300px"
components:
  nav-link:
    textColor: "{colors.steel}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.ink}"
  theme-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    rounded: "{rounded.round}"
    size: "32px"
  ledger-row:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "13px 0"
  ledger-figure:
    textColor: "{colors.crimson}"
    typography: "{typography.figure}"
  fold-row:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "13px 0"
  live-dot:
    backgroundColor: "{colors.crimson}"
    rounded: "{rounded.round}"
    size: "7px"
  reel-card:
    backgroundColor: "{colors.deep-mist}"
    rounded: "{rounded.hair}"
    height: "{spacing.reel-height}"
    width: "240px"
  reel-caption:
    textColor: "{colors.ink}"
    typography: "{typography.meta}"
  reel-progress:
    backgroundColor: "{colors.frost-line}"
    height: "1px"
  reel-progress-fill:
    backgroundColor: "{colors.crimson}"
    height: "2px"
  round-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.round}"
    size: "36px"
  round-button-hover:
    backgroundColor: "{colors.deep-mist}"
  copy-chip:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    rounded: "{rounded.pill}"
    padding: "3px 9px"
  copy-chip-hover:
    textColor: "{colors.ink}"
  seal:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.mist}"
    typography: "{typography.seal-glyph}"
    size: "36px"
---

# Design System: stanley ho

## Overview

**Creative North Star: "The Signed Ledger"**

A personal site set like a well-kept ledger and signed with a chop. One centred column (720px) holds everything; section names sit in a left gutter like margin notes, and the content to their right is divided only by hairlines. Nothing is decorative: no hero, no tinted panels, no new containers. Weight, tone, and alignment carry the hierarchy, and every word is set in lowercase, so the page reads in one even, conversational voice.

The ground is Mist: a visibly cool blue-grey, chosen so the page never reads as the warm off-white of generic generated sites. Every neutral (text, rules, secondary text) shares its blue hue, so the page reads as one tinted material rather than grey on white. Dark mode is the same family at night: a deep blue-black ground with pale blue-white text.

The colour is crimson, and it has a stated ceiling. The 何 seal carries it at full strength: a small mark beside the name that stamps once on load, the footer sign-off, the favicon. Beyond the seal it appears only as small signals: outcome figures in the ledger, tinted link underlines, a single highlighter band in the intro, the static "now" dot, and the progress line under the design reel. The theme follows the system preference until the visitor uses the toggle in the nav; that choice is remembered and applied before paint. Density is calm but not sparse: 16px body at 1.6 line height, rows on a 13px vertical pad, and figures in tabular numerals so outcomes line up right-aligned like a column of accounts.

**Key Characteristics:**
- Single 720px column; gutter-labelled sections that stack on mobile. Nothing breaks the column.
- All lowercase, including buttons, via the body text transform.
- One text family (Hanken Grotesk, 400/500/600) with stylistic set 1 and tabular figures; a brush face only for the seal's one glyph.
- Hairline rules as the only structural device; flat surfaces.
- A cool blue Mist ground with blue-tinted neutrals, matched in light and dark, with a remembered manual toggle.
- One colour, crimson: the seal plus a closed list of small accents.
- Expandable rows for both the work ledger and About's long-form content.
- A horizontal scroll-snap reel for design work, contained in the body column.
- Quiet, expo-out motion: a single stamp on load, rows that unfold in place, a viewer that fades in.

## Colors

A cool blue-grey mist, every neutral sharing its hue, with crimson held to a short, closed list of uses.

### Primary
- **Seal Crimson** (light and dark variants in the frontmatter): a deep blue-leaning red that sits against the mist rather than warming it. Full strength: the seal body (header mark, footer, favicon, share image), ledger outcome figures, the 7px "now" dot, the 2px reel progress fill, the 2px focus outline, and link underlines on hover. Link underlines at rest mix it to 45% over transparent. The dark variant is lifted to a rose so it holds its weight on the blue-black ground.
- **Rose Band**: the single highlighter `mark` in the intro, a band over the lower 42% of the line so it reads as a pen stroke, not a fill. Translucent crimson in dark mode.
- **Selection Rose**: used only for `::selection`, so selected text stays in the seal's family.

### Neutral
- **Mist**: page ground; also the colour of the seal's knocked-out glyph (drawn in the page colour, so the seal looks cut from the page) and the badge behind the reel's external-link arrow.
- **Deep Mist**: one step darker than the ground. Fill behind reel art (unless a piece sets its own edge-matching fill), avatar and photo placeholders, and the hover fill of round buttons.
- **Ink**: blue-black primary text: company names, the current reel number, active nav, piece titles. Pale blue-white in dark mode.
- **Steel**: secondary text: role titles, gutter labels, lead paragraphs, nav at rest, theme toggle and copy icons, meta lines, footer.
- **Haze**: hover borders on outlined controls.
- **Frost Line**: a firm blue-grey divider, clearly darker than Deep Mist so rows read as ruled lines rather than faint seams. Every rule and outline: ledger, fold and list rows, footer rule, reel progress track, copy chip and round-button outlines.
- **Scrim**: near-opaque Mist behind the image viewer, so the viewer feels like the page dimming rather than a black lightbox.

### Theme switching
Light tokens are the default. Dark tokens apply when the system prefers dark and the visitor has not chosen light, or when the visitor has chosen dark. Both blocks set identical token names. A pre-paint script applies the saved choice, and transitions are suppressed for two frames whenever the theme changes, so colours swap without animating.

### Named Rules
**The Accent Ceiling Rule.** Crimson has six uses: the seal, ledger outcome figures, link underlines, the one intro highlight, the "now" dot, and the reel progress fill. Beyond those it appears only as the focus outline and the selection tint. A new use needs an explicit system change; it is never a button fill, background panel, heading colour, hover tint or confirmation state. Portfolio artwork keeps its own colour; that is content, not chrome.

**The One Highlight Rule.** At most one `mark` per page, inside the intro.

**The Shared Hue Rule.** Every neutral carries the mist's blue (hue near 250 in OKLCH). Don't introduce a flat grey or a warm off-white; a new neutral is tinted like the rest.

**The Matched Pair Rule.** Every neutral and accent token is defined in both schemes. Add a role to both or to neither.

## Typography

**Display Font:** none; the system has no display face.
**Body Font:** Hanken Grotesk (with ui-sans-serif, system-ui, sans-serif), weights 400, 500, 600.
**Seal glyph only:** Zhi Mang Xing, a fast cursive brush face, subset to the single character 何, with Songti SC and STSong as fallbacks. The favicon and touch icon are rendered PNGs (64px and 180px) of the same seal, since a favicon cannot load the web font.

**Character:** A plain, slightly warm grotesk set small and tight and entirely in lowercase. A single 20px intro does the work a hero would elsewhere. The brush stroke inside the seal is the one hand-made mark on the page.

### Hierarchy
- **Headline** (500, 26px, 1.3, -0.02em; 23px on mobile): the one page title on About, set as an intro rather than a large heading.
- **Intro** (400, 20px, 1.5, -0.01em; 18px on mobile): opening paragraphs, max 34em. A second intro paragraph drops to Steel.
- **Title** (600, 16px): company and item names in rows; fold-row titles on About.
- **Body** (400, 16px, 1.6, `ss01`): all running text; lead paragraphs and prose capped at 34em, row stories at 36em.
- **Label** (500, 15px, Steel): gutter section labels, nav, viewer bar. On mobile the gutter label becomes a stacked 20px/600 heading in Ink.
- **Meta** (400, 14px, 1.45): reel captions (title in 500 Ink, role in Steel), reel counter, ledger sector line, footer.
- **Figure** (500 with `tnum`, `lnum`): ledger outcome figures in Seal Crimson; the same tabular setting (at the surrounding weight) for counters.

### Named Rules
**The Lowercase Rule.** All interface text renders in lowercase through the body text transform, and buttons inherit it. Author copy in normal sentence case so the source stays readable and accessible names stay natural; never hand-type lowercase as a substitute for the rule.

**The Tabular Rule.** Any number a reader might compare (funding, positions, counts) is set in tabular lining figures, right-aligned where it sits in a row; reel positions are zero-padded ("01 / 07").

**The No Display Face Rule.** Hierarchy comes from weight (400/500/600) and tone, not size jumps. Nothing on a page exceeds 26px. The share image is the sole exception because it is viewed as a thumbnail.

## Layout

A single centred column 720px wide, padded 88px top, 24px sides, 56px bottom (40px/16px at or below 720px). The header row holds the avatar, the name with its status line, the seal mark set 4px off the name, and right-aligned text nav ending in the theme toggle; on mobile the nav wraps to its own line with the toggle pushed to the right.

Sections are a two-column grid: a 136px gutter for the label, a 32px gap, then the body. Sections are 80px apart (56px on mobile). The footer sits 112px below the last section behind a hairline. On mobile the gutter collapses and the label stacks above its section as a heading.

Rows (ledger, fold, lists) use a 13px vertical pad, and the first line of every section body sits 13px down so it shares a baseline with the gutter label. Inner spacing steps through 4, 8, 12, 16, 20, 24 and 32px.

The reel stays inside the body column at every width: its track scrolls and snaps within the column, and the next card is cut cleanly at the column edge as the hint that more follows. Its control bar sits under it, also in the column.

**The Shared Baseline Rule.** The gutter label and the first line of its section body sit on the same baseline. New section bodies start with the same 13px top offset.

**The No Bleed Rule.** Nothing crosses the 720px column, the design reel included.

## Elevation & Depth

Flat. Depth comes from tone (Deep Mist one step off the ground) and hairlines, never from layered surfaces. The only shadow lifts the enlarged artwork inside the image viewer, as a print would sit on a table (`0 2px 6px rgb(0 0 0 / 0.08), 0 24px 48px -16px rgb(0 0 0 / 0.25)`).

**The Flat Page Rule.** Page surfaces carry no shadows. A shadow appears only under an image shown at full size in the viewer.

## Shapes

Square by default. Reel art and photos take a hairline 2px radius so they look trimmed rather than rounded. The avatar, the "now" dot, the external-link badge (26px), the theme toggle (32px) and the reel and viewer controls (36px) are full circles; the copy chip is an icon pill. The seal is one flat drawing everywhere: a square with softly eased corners and the brush glyph knocked out in the page colour, no inner keyline, no texture. Structural lines are always 1px; the reel progress fill is the single 2px line. Icons are 14px (16px in round buttons) line drawings on a 1.5 stroke with round caps: arrows for outbound links, a plus that turns 45° into a cross for open rows, chevrons and a cross in the viewer, sun and moon for the theme toggle, two sheets and a check for the copy chip.

## Components

### Navigation
Plain text links in Label size, Steel at rest, Ink on hover and for the current page (`aria-current`). No underline, no indicator bar. 22px apart (20px on mobile). The last item is the theme toggle: a 32px circular hairline button showing a moon in light mode and a sun in dark mode, Steel icon that turns Ink on hover. Its label names the mode it switches to.

### Links
Inherit the surrounding text colour with a 1px crimson underline at 45% strength, offset 3px; the underline goes to full crimson on hover. Outbound links carry the arrow icon.

### Reach Row
Under the intro: the email address followed by the copy chip, then LinkedIn with an outbound arrow. 24px between items, wrapping on narrow screens. This row is the site's contact; there is no separate contact section or page.

### Intro Highlight
One `mark` in the opening paragraph: text colour unchanged, Rose Band across the lower 42% of the line, 2px of overhang on each side.

### Outcome Ledger (signature)
A list of expandable rows built on native `<details>`. Each summary row is a three-column grid: company (Title weight) followed by role in Steel, the outcome figure right-aligned in Figure style and Seal Crimson, and a 12px plus icon. Rows are separated by hairlines with one above the first. Opening a row rotates the plus 45° and unfolds the story in place (height and opacity, 0.45s expo-out where supported): a Meta sector line, one or two paragraphs at 36em, and an outbound link. The current-role row has no disclosure; its aside reads "now" after a static 7px crimson dot.

### Fold Rows (About)
About's long-form subsections use the ledger's expandable row with the figure column removed: the subsection title in Title weight and the rotating plus. All start closed; an opened story keeps the ledger's story styles with `strong` at 600. The lakeside photo sits inside the "How I got here" fold, after its text, as a 16:10 crop with a Meta caption.

### Plain List Rows
Same hairline rhythm without disclosure: Title name with a Steel description beneath, and an optional right-aligned aside. The aside stacks under the text on mobile.

### Design Reel (signature)
A curated horizontal strip of seven pieces with mandatory scroll snapping (each card snaps to its start) and a hidden scrollbar, contained in the body column. Cards are 16px apart (12px on mobile). Each card is a fixed-height art panel (380px, 300px on mobile) at least 240px wide (200px on mobile). The image fills the height at its natural aspect ratio, centred on Deep Mist or on a per-piece fill that matches the image's own edge. A Meta caption sits 10px below: the title in 500 Ink, the role on a second line in Steel, wrapped to the card's width. Hover scales the art 1.025 over 0.7s. Image pieces open the viewer (zoom-in cursor); decks open in Google Drive (alias cursor) and carry a 26px circular Mist badge with an arrow in the top-right corner.

Below the reel: a tabular counter ("01 / 07", current number in Ink), a 1px Frost Line track whose 2px crimson fill grows to mark position, and previous/next round buttons that fade to 35% at either end. The track is focusable and responds to arrow keys.

### Image Viewer (signature)
A full-screen native `<dialog>` on the near-opaque Scrim, cycling through the reel's image pieces. The image is centred with the viewer shadow; a bottom bar aligned to the page column shows title, role, a tabular "n / total" counter and three round buttons (previous, next, close). Arrow keys page through; focus returns to the opening card on close. Opens with a 0.35s fade; each image swaps in with a short fade and scale from 0.985.

### Round Buttons
36px circles with a Frost Line outline and Ink icon on a transparent ground; hover fills Deep Mist and darkens the outline to Haze. Used for reel and viewer controls (the theme toggle is the 32px member).

### Copy Chip
An icon-only pill after an email address: Steel two-sheets icon (14px), Frost Line outline, 3px 9px padding, accessible name "copy email address". Hover darkens icon and outline to Ink and Haze. On success the icon swaps to a check for 1.8s and the accessible name becomes "email address copied"; the confirmation is carried by the icon change, not by colour.

### Seal (signature)
The crimson square with 何 brushed out in the page colour, one flat drawing. Footer version: 36px beside "stanley ho, 2026" and a "back to top" link. Header version: 26px, stamping once on load (0.75s, scale 1.35 to 1 with a slight rotation, 0.25s delay), static under reduced motion.

## Do's and Don'ts

### Do:
- **Do** keep every page in the 720px column with gutter labels at 136px, stacking to headings at 720px and below.
- **Do** separate content with 1px Frost Line rules and nothing heavier.
- **Do** tint every new neutral with the mist's blue, and define it in the light block and both dark blocks under the same name.
- **Do** write copy in sentence case and let the body transform render it lowercase.
- **Do** set comparable numbers in tabular lining figures, right-aligned in their row.
- **Do** put long-form content in fold rows rather than new containers.
- **Do** use the shared expo-out curve (`cubic-bezier(0.16, 1, 0.3, 1)`) for movement and keep all motion off under `prefers-reduced-motion`.
- **Do** use the 2px Seal Crimson outline for every focus state.

### Don't:
- **Don't** use crimson beyond the accent ceiling: no fills, panels, headings, hover tints or success states.
- **Don't** add a second highlighter mark, or a mark outside the intro.
- **Don't** use a warm off-white or a neutral grey ground; the ground is Mist.
- **Don't** add a second text family, or set any interface text above 26px; the brush face stays inside the seal.
- **Don't** put page content on raised cards, tinted panels or shadowed surfaces; the viewer image is the only shadowed object.
- **Don't** add a big hero, icon tiles or a card grid; the intro paragraph and the ledger are the first viewport.
- **Don't** let anything, the reel included, cross the 720px column.
- **Don't** stamp the seal more than once per page load, or add texture or an inner rule to the seal.
