# Dhruvi Malusare

I study Human–Computer Interaction and business at NJIT. I’m looking for early-career work in UX research, product design, or AI-enabled operations. My work includes testing product decisions with users and building reporting and automation workflows for operations teams.

[GitHub profile](https://github.com/dhruvi0805) · [GitHub Pages profile](https://dhruvi0805.github.io/) · [LinkedIn and contact](https://www.linkedin.com/in/dhruvi-malusare/) · [Portfolio repository](https://github.com/dhruvi0805/individual_portfolio_) · [Résumé draft](#resume-draft)

## Selected work

<div class="work-preview">
  <fieldset class="layout-options">
    <legend>Presentation preview</legend>
    <label><input type="radio" name="work-layout" value="editorial" checked> Retro Bauhaus</label>
    <label><input type="radio" name="work-layout" value="quest"> 8-bit RPG</label>
  </fieldset>
  <div class="work-cases">
    <article>
      <h3>NeuroNet</h3>
      <p><strong>Individual project · playable browser draft</strong></p>
      <p>I built a five-question pattern practice game to explore how immediate explanations and visible progress support practice. Each answer shows the rule, and the attempt history uses browser storage.</p>
      <p><strong>Check.</strong> I started the published demo and entered 32 for 2, 4, 8, 16. The game marked it correct and explained the doubling rule. Account-backed history and cross-device persistence still need a working implementation and checks.</p>
      <p><a href="https://dhruvi0805.github.io/IS218_Game/play/">Play NeuroNet</a> · <a href="https://github.com/dhruvi0805/IS218_Game">Repository and project record</a></p>
    </article>
    <article>
      <h3>Bench &amp; Bolt</h3>
      <p><strong>Group project · in progress</strong></p>
      <p>Our team is building a bike-repair inquiry workflow so a coordinator can see requests and decide what happens next. In my merged pull request, I documented the inquiry fields, status rules, and steps from intake to the coordinator queue. I own the planned SQLite persistence work.</p>
      <p><strong>Check.</strong> The group evidence log records passing CI for PR #4. I still need to demonstrate that a saved inquiry appears in the queue after a restart.</p>
      <p><a href="https://github.com/apink634/is218-bench-bolt">Group repository</a> · <a href="https://github.com/apink634/is218-bench-bolt/pull/4">My merged contribution</a> · <a href="https://github.com/apink634/is218-bench-bolt/pull/4/checks">PR checks</a></p>
    </article>
  </div>
</div>

## Résumé draft {#resume-draft}

**Dhruvi Malusare** · Newark, NJ · [LinkedIn](https://www.linkedin.com/in/dhruvi-malusare/)

**Education.** NJIT, B.S. in Human–Computer Interaction, Business minor, expected May 2027. GPA 3.97/4.00. Dean’s List since 2023, NJIT Student Staff of the Year 2025–2026, and first place at the SIGCHI Design Jam.

- **Conduent · Strategic Operations Intern · June 2026–present.** Built Power BI dashboards for adoption, estimated savings, and costs. Automated audit reporting with Excel, Office Scripts, and Power Automate. Developed validation procedures for a 6,000-record employee roster.
- **Uplifty AI · UI/UX & Product Management Intern · February–April 2026.** Analyzed usability and UAT data, contributing to a 20% lift in adoption intent. Automated data entry with Zapier, Google Sheets, and Apps Script, saving two hours daily.
- **NJIT · New Student Orientation Lead Team · January 2025–January 2026.** Led 40 orientation leaders and supported 1,800+ students. Integrated spreadsheet tracking with Slate CRM to improve accuracy across 500+ records.
- **Selected projects.** Funny Money placed first at the SIGCHI Design Jam after research with 42 survey respondents and two interviews. For NJIT library wayfinding, I conducted three interviews and ten contextual inquiries and designed an indoor navigation prototype.

**Skills.** User research, usability testing, requirements gathering, process mapping, workflow automation, Excel, Power BI, Figma, SQL, and Python.

## Review 2 check

Try both presentation options using the same task. Find what I contributed to Bench & Bolt, open the merged change, then find where NeuroNet stores attempts. Record which layout made the evidence easier to find. Peer retest pending.

## Portfolio plan

### Reader and experience

My primary reader is an early-career UX or product design hiring manager. They should be able to scan a short case study and understand my contribution, the decision I made, and what changed after testing. An engineering reader should be able to find implementation constraints and verification. An operations reader should be able to trace a recommendation to the underlying evidence. A classmate reviewing this site should be able to open the original employer posting and challenge an assumption.

### Visual alternatives

- **Geometric editorial layout with restrained glass effects.** Use a structured grid, strong headings, and high-contrast evidence cards. Readers can scan roles and follow a source quickly.
- **8-bit RPG-inspired layout.** Use a path map and pixel accents to encourage exploration. Keep familiar navigation labels so a reader can still find the comparison and sources. Avoid assigning numerical skill ratings without a defined basis.

### Winning style — Retro Bauhaus

I chose Retro Bauhaus for its clear hierarchy and the way the collage adds personality to a structured layout. The winning moodboard pairs oversized black type and a clean grid with overlapping vintage cameras, Polaroids, vinyl, film strips, checkerboard patterns, retro technology, and hand-drawn stars.

Use pure white (`#FFFFFF`) for the page and cards, near-black (`#151515`) for type and structure, and cream (`#E9DCC8`) for soft shadows. Use dusty pink and mustard as occasional accents. Keep employer requirements, navigation, and source links aligned and easy to scan. Let the decorative composition overlap within the hero and stack below the text on narrow screens.

A partner can check the layout by finding DoorDash’s AI-related responsibility, opening the employer source, and explaining why it matters.

### Candidate stories

Develop these prompts into examples from work I actually did:

1. A research finding that changed a design decision.
2. A prototype I revised after user feedback.
3. A design tradeoff I worked through with an engineering or business partner.


<style>
.work-preview .layout-options { display: flex; flex-wrap: wrap; gap: 8px 20px; margin: 12px 0 20px; padding: 8px 0; }
.work-preview .layout-options legend { font-weight: 650; }
.work-preview .layout-options input { appearance: auto; margin-right: 5px; accent-color: #283d76; }
.work-preview .layout-options input:focus-visible { outline: 2px solid #283d76; outline-offset: 3px; }
.work-preview .work-cases { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.work-preview article { min-width: 0; padding: 16px; border: 1px solid #dedede; background: #fff; box-shadow: 0 9px 18px rgba(198, 168, 124, .25); }
.work-preview article h3 { margin-top: 0; }
.work-preview:has(input[value="quest"]:checked) .work-cases { grid-template-columns: minmax(0, 1fr); }
.work-preview:has(input[value="quest"]:checked) article { background: #131b2e; color: #fff4d6; border: 3px solid #526a91; box-shadow: 4px 4px #24324a; }
.work-preview:has(input[value="quest"]:checked) article h3 { font-family: monospace; color: #ffd166; }
.work-preview:has(input[value="quest"]:checked) article a { color: #74e0b5; }
@media (max-width: 640px) { .work-preview .work-cases { grid-template-columns: minmax(0, 1fr); } }
</style>
