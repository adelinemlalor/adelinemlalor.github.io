# Change 1: Selected Projects and GitHub Pages URL

**Branch:** `add-projects-section`
**Status:** Implemented and verified

## Planned work

### Selected Projects section

Add a **Selected Projects** section after the existing Work Experience entries in `work.md`. Use one stacked card per project, following the existing single-column page width, type hierarchy, colors, spacing, and borders. Each card will show its title, role, organization, a short description, and skills. Keep skill labels wrapping cleanly on small screens; add no dependencies.

Use only the attached project details:

1. **Enterprise Product-Led Growth Strategy & Research Hub**
   - **Role:** Sr. Product & Solution Marketing Manager, MBA Intern (AI & App Development)
   - **Organization:** ServiceNow
   - **Description:** Defined ServiceNow’s product-led growth motion for its agentic developer portfolio through 22 interviews and a 17-platform benchmark; mapped nine blockers to an eight-stage activation funnel; recommended an install-base-first pilot with Build Agent; and created an interactive hub for 12 reports. The SVP used the research to build executive support for PLG.
   - **Skills:** Strategy formulation, research design, competitive benchmarking, funnel and friction mapping, metrics definition, information architecture, executive communication

2. **Product Signal Hub**
   - **Role:** Product Manager Intern
   - **Organization:** RevReply
   - **Description:** Built a Lovable/Supabase platform that ingests Jira tickets every six hours and scrapes competitor pages with Firecrawl. Claude clustered 63+ signals into about 40 issues, and GPT ranked them by revenue exposure; the work surfaced $600K ARR at risk across about 13 accounts. Deliverables included a dashboard, weekly report, AI PM chat agent, and 16-page build and roadmap report.
   - **Skills:** Problem definition, data modeling, full-stack prototyping, AI system design, prioritization frameworks, Jira and Supabase integration, executive communication

3. **TalkThrough — Asynchronous Voice Interview Platform**
   - **Role:** Creator and Builder (self-initiated, during my ServiceNow MBA internship)
   - **Organization:** ServiceNow
   - **Description:** Built a voice-first interview app to remove the scheduling bottleneck in seller research. Its Compare view synthesizes themes, agreements, and contradictions. In the pilot, 16 of 22 invited sellers completed interviews (73%); their input informed competitive battlecards published to SalesCoach. The project was later scoped for a merge with a colleague’s tool, and its codebase and backend logic were handed off.
   - **Skills:** Problem identification, rapid prototyping, user-centered design, design tradeoffs, AI-assisted synthesis, productization and handoff

All requested card fields are present in the attachment. If that changes before implementation, mark missing content as `[Placeholder: details not supplied]`; do not invent details, achievements, or metrics.

### Site URL and README

Keep `_config.yml` set to `url: "https://adelinemlalor.github.io"` with `baseurl: ""`. The current branch already has these values, and the README already refers to `adelinemlalor.github.io`; verify they remain correct during implementation.

## Verification completed

- Build and check the Jekyll site.
- Review the Work Experience page at 375px and 1280px.
- Confirm all three cards contain only the supplied project details.