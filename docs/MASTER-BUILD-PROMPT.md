# MASTER BUILD PROMPT — LANDEVIDENCE AI

You are a senior product architect, UI/UX designer, React engineer, motion designer, GIS dashboard designer, and hackathon product engineer.

Build a complete production-quality FRONTEND prototype for:

# LandEvidence AI

### Evidence-Driven Land Governance & Policy Intelligence Platform

Problem Statement:
**SIH26019 — National Digital Platform for Research, Policy Innovation, and Evidence-Based Land Governance**

Organization:
Ministry of Rural Development

Theme:
Smart Automation / Blockchain & Cybersecurity

---

# 1. PRIMARY OBJECTIVE

Build a highly polished, modern, responsive, production-structured React.js application that looks like a real government-grade national land intelligence platform.

This is currently a FRONTEND-ONLY prototype.

IMPORTANT:

* Do NOT build a real backend.
* Do NOT require a real database.
* Do NOT require real authentication APIs.
* Do NOT make fake API calls to unavailable government systems.
* Use well-structured static/mock data.
* However, architect everything so a Laravel REST API can replace the mock services later with minimal changes.
* Every page must work.
* Every important button must perform a visible action.
* Navigation must work.
* Authentication flow must work locally.
* Profile editing must work locally.
* Theme customization must work.
* Filters/search/sorting/modals/tabs/dropdowns must work.
* No dead-end UI.
* No placeholder "Coming Soon" pages for core functionality.

The final application should feel like an actual deployable SaaS/government intelligence product rather than a college project.

---

# 2. VISUAL REFERENCE

Use the previously generated LandEvidence AI dashboard image as the PRIMARY visual reference.

The design language should be:

* premium
* futuristic
* government-tech
* trustworthy
* data-dense but readable
* dark-first
* modern enterprise SaaS
* subtle glassmorphism
* deep navy background
* blue/teal accents
* emerald verification indicators
* amber warnings
* red risk indicators
* soft gradients
* thin borders
* subtle glow
* clean typography
* professional charts
* sophisticated GIS interface

DO NOT copy the screenshot literally.

Improve it into a coherent design system.

Avoid childish gradients, excessive neon, excessive glassmorphism, excessive shadows, or gaming-style UI.

The interface should look like something that could realistically be presented to a ministry, policy researcher, district administration, or national governance organization.

---

# 3. TECHNOLOGY STACK

Use:

* React.js
* Vite
* JavaScript, NOT TypeScript
* React Router DOM
* Tailwind CSS
* Framer Motion
* Lucide React icons
* Recharts
* React Leaflet / Leaflet
* date-fns
* clsx
* optionally @react-three/fiber + drei for carefully selected 3D elements

Do NOT add unnecessary dependencies.

Prioritize performance.

Use lazy loading for heavy pages/components.

Do not animate everything simultaneously.

---

# 4. APPLICATION ARCHITECTURE

Create a clean scalable architecture.

Recommended structure:

src/

├── app/
│   ├── App.jsx
│   ├── router.jsx
│   └── providers/
│       ├── AuthProvider.jsx
│       ├── ThemeProvider.jsx
│       └── NotificationProvider.jsx
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── maps/
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── navigation/
│   ├── dashboard/
│   ├── maps/
│   ├── evidence/
│   ├── reports/
│   ├── policy/
│   ├── disputes/
│   ├── analytics/
│   ├── research/
│   ├── profile/
│   └── 3d/
│
├── data/
│   ├── users.js
│   ├── districts.js
│   ├── parcels.js
│   ├── landRecords.js
│   ├── evidence.js
│   ├── disputes.js
│   ├── policies.js
│   ├── reports.js
│   ├── research.js
│   ├── activities.js
│   ├── notifications.js
│   ├── analytics.js
│   └── mapLayers.js
│
├── hooks/
│   ├── useAuth.js
│   ├── useTheme.js
│   ├── useDebounce.js
│   └── useLocalStorage.js
│
├── layouts/
│   ├── AuthLayout.jsx
│   ├── DashboardLayout.jsx
│   └── PublicLayout.jsx
│
├── pages/
│   ├── auth/
│   ├── dashboard/
│   ├── map/
│   ├── evidence/
│   ├── research/
│   ├── policy/
│   ├── disputes/
│   ├── reports/
│   ├── analytics/
│   ├── administration/
│   ├── profile/
│   └── errors/
│
├── services/
│   ├── api.js
│   ├── authService.js
│   ├── evidenceService.js
│   ├── landService.js
│   ├── policyService.js
│   └── reportService.js
│
├── utils/
│   ├── formatters.js
│   ├── constants.js
│   ├── permissions.js
│   └── validators.js
│
├── styles/
│   ├── globals.css
│   └── animations.css
│
└── main.jsx

Keep business logic separate from UI.

Do not put massive arrays directly inside JSX components.

---

# 5. ROUTING

Implement proper React Router routes.

Public:

/
/about
/features
/contact

Authentication:

/login
/signup
/forgot-password
/verify-account

Protected:

/dashboard
/map
/evidence
/evidence/:id
/evidence-graph
/land-records
/land-records/:id
/disputes
/disputes/:id
/policy-simulator
/research
/research/:id
/reports
/reports/:id
/analytics
/field-surveys
/provenance
/notifications
/profile
/profile/security
/settings

Administration:

/admin/users
/admin/verification
/admin/audit-logs
/admin/system-health

Error:

/403
/404

Use ProtectedRoute.

If user is not authenticated and tries to access a protected page:

redirect to /login.

After successful dummy login:

redirect to /dashboard.

If already authenticated:

redirect /login to /dashboard.

---

# 6. DUMMY AUTHENTICATION

Create a realistic frontend-only authentication system.

Demo credentials:

Email:
[demo@landevidence.ai](mailto:demo@landevidence.ai)

Password:
Demo@123

Also provide:

Researcher demo
[researcher@landevidence.ai](mailto:researcher@landevidence.ai)
Research@123

District Officer demo
[officer@landevidence.ai](mailto:officer@landevidence.ai)
Officer@123

Policymaker demo
[policy@landevidence.ai](mailto:policy@landevidence.ai)
Policy@123

Admin demo
[admin@landevidence.ai](mailto:admin@landevidence.ai)
Admin@123

Do NOT hardcode authentication logic inside page components.

Create authService.js.

Use localStorage for demo session.

Example:

landEvidenceAuth

landEvidenceUser

landEvidenceTheme

The login UI must include:

* email
* password
* show/hide password
* remember me
* forgot password
* login button
* demo account selector
* loading animation
* validation
* error state
* success toast

Add a polished animated authentication screen.

---

# 7. LANDING PAGE

Create a premium public landing page.

Hero:

LAND EVIDENCE AI

"From fragmented land data to evidence-backed decisions."

Subtitle:

"An integrated geospatial intelligence platform connecting land records, research evidence, field verification, legal information and policy intelligence."

Hero buttons:

Explore Platform
View Demo

Hero visual:

Animated 3D/2.5D India map or glowing geospatial network.

Sections:

* Problem
* Fragmented Data
* Our Solution
* Evidence Graph
* GIS Intelligence
* AI Evidence Assistant
* Policy Simulator
* Provenance & Verification
* Role-based Workspaces
* Impact
* Security
* CTA

Include subtle Framer Motion animations.

---

# 8. LOGIN PAGE

Design a premium split-screen login.

Left:

LandEvidence AI branding.

Animated evidence network.

Right:

Login card.

Include:

* email
* password
* remember me
* forgot password
* login
* demo users
* privacy/security indicators

Add a small:

"Demo Mode"

indicator.

---

# 9. SIGNUP PAGE

Fields:

* full name
* email
* organization
* role
* password
* confirm password

Roles:

Researcher
Policymaker
District Officer
Field Officer
Citizen

After signup:

show successful account creation modal and redirect to dashboard.

No real email verification required.

---

# 10. MAIN DASHBOARD

This is the most important page.

Layout:

LEFT SIDEBAR

Top Header

Main Content

Right contextual panels where appropriate.

Dashboard should contain:

### KPI cards

Total Land Area
5,358 km²

Agricultural Land
2,842 km²

Forest & Green Cover
612 km²

Disputed Parcels
124

Active Projects
32

Evidence Records
12,842

Verified Sources
9,421

Policy Studies
387

Each KPI card should have:

* icon
* number
* trend
* percentage
* tooltip
* hover animation

---

# 11. DASHBOARD MAP

Large interactive GIS map.

Default:

Lucknow District.

Add controls:

* zoom
* fullscreen
* locate
* layers
* satellite/street toggle
* search
* measurement
* legend

Layers:

Land Use
Agricultural
Forest
Water Bodies
Infrastructure
Acquisition Projects
Dispute Hotspots
Administrative Boundaries
Environmental Risk

Clicking map feature opens:

Land Parcel Details drawer.

---

# 12. LAND PARCEL DETAILS

Show:

Parcel ID
Survey Number
Area
Current Land Use
Previous Land Use
Ownership Type
District
Village
Last Updated

Tabs:

Overview
Evidence
Timeline
Legal
Satellite
Verification

Buttons:

View Evidence
View on Map
Generate Report
Compare History

---

# 13. EVIDENCE INTELLIGENCE

Create /evidence.

Header:

Evidence Intelligence

Search:

"Search documents, datasets, policies, survey reports..."

Filters:

* source
* year
* district
* evidence type
* verification status
* confidence
* land category

Evidence cards:

Title
Source
Date
District
Evidence type
Verification status
Confidence score

Example:

"Land Use Survey — Lucknow 2024"

Verified ✓

Source:
District Survey Authority

Hash:
8f3a...29cd

---

# 14. AI EVIDENCE ASSISTANT

Create a premium AI interface.

Title:

Evidence Intelligence Assistant

User question:

"What are the major land-use changes in Lucknow between 2019 and 2024?"

Return:

### AI Summary

Agricultural land conversion increased primarily in urban expansion zones.

### Evidence

1. Land Use Survey 2024
2. Satellite Classification Dataset
3. District Planning Report
4. Field Verification Report

Every answer MUST have citations.

Include:

Source
Dataset
Year
Confidence
"View Evidence"

Add suggested questions:

* What changed in this district?
* Which parcels have conflicting evidence?
* Show acquisition hotspots.
* Compare two districts.
* What evidence supports this policy?
* Generate policy brief.

This is a simulated AI interface using static data.

---

# 15. EVIDENCE GRAPH

Create an impressive graph visualization.

Central node:

LAND PARCEL

Connected nodes:

Land Record
Registration
Mutation
Satellite Image
Field Survey
Court Case
Policy
Environmental Dataset
Research Paper

Clicking a node opens its details.

Include:

Graph controls:

* zoom
* reset
* filter
* expand
* collapse
* timeline

Show:

"Evidence lineage"

Example:

Land Parcel
→ Land Record
→ Mutation
→ Registration
→ Satellite Change
→ Field Verification
→ Current Status

This should visually communicate the core concept of the project.

---

# 16. LAND RECORDS PAGE

Table with:

Parcel ID
Survey No.
Village
District
Land Use
Area
Ownership
Verification
Updated

Features:

* search
* sorting
* filtering
* pagination
* column visibility
* export CSV button
* row click
* bulk select

Use mock data.

---

# 17. LAND RECORD DETAIL

Detailed page with:

Parcel overview

Ownership timeline

Mutation timeline

Registration timeline

Land-use history

Satellite comparison

Evidence

Legal disputes

Verification

Audit history

Use timeline visualization.

---

# 18. DISPUTE RESOLUTION

Dashboard:

Total disputes
High risk
Medium risk
Resolved
Pending verification

Map of dispute hotspots.

Dispute table.

Each dispute:

Dispute ID
Parcel
Type
Risk
Status
Last activity

Detail page:

Parties
Parcel
Boundary conflict
Evidence
Court records
Satellite comparison
Field survey
Timeline
Recommended next verification step

IMPORTANT:

Do NOT claim AI has legally determined ownership.

Use wording:

"Potential conflict detected"

"Requires official verification"

---

# 19. BOUNDARY CONFLICT VISUALIZER

Create a visual comparison.

Left:

Historical boundary

Right:

Current boundary

Overlay:

Detected overlap

Show:

Overlap area
Confidence
Evidence sources
Last verified date

Add animated boundary lines.

---

# 20. POLICY SIMULATOR

This should be one of the flagship pages.

Title:

Policy Impact Simulator

Scenario builder:

District
Policy
Current value
Proposed value

Example:

Agricultural Land Conversion Threshold

Current:
10%

Proposed:
15%

Button:

Run Simulation

Animate the transition.

Show:

### Estimated Impact

Potential affected land
+18.7%

Agricultural area
-12.3%

Infrastructure potential
+21.4%

Environmental risk
+8.6%

Show:

* bar charts
* line charts
* comparison cards
* risk indicators

Clearly label:

"Scenario estimate — not an official forecast."

Add:

Save Scenario
Compare Scenarios
Generate Policy Brief

---

# 21. POLICY COMPARISON

Allow two saved scenarios to be compared.

Example:

Scenario A
10%

Scenario B
15%

Compare:

Land impact
Environmental risk
Infrastructure
Population exposure

Use charts.

---

# 22. RESEARCH WORKSPACE

Create a research-oriented page.

Features:

* saved research
* evidence collections
* datasets
* notes
* citations
* policy papers
* collaborative workspace

Create:

New Research Project

Fields:

Research title
Description
District
Topic
Evidence sources

Research detail page:

Overview
Evidence
Notes
Datasets
Collaborators
References

---

# 23. REPORTS

Create a professional report center.

Categories:

Policy Brief
Land Assessment
Dispute Report
District Intelligence
Environmental Report
Research Report

Report cards:

title
author
date
status

Buttons:

View
Edit
Duplicate
Export PDF
Share

For prototype, PDF button can show a polished "Report export prepared" modal.

---

# 24. REPORT DETAIL

Make it look like a real government intelligence report.

Sections:

Executive Summary
Key Findings
Geospatial Analysis
Evidence
Policy Impact
Risk Assessment
Recommendations
Sources
Verification

Include charts and map preview.

---

# 25. ANALYTICS

Analytics dashboard.

Charts:

Land-use change over time
District comparison
Dispute trends
Evidence verification
Policy impact
Acquisition activity
Research activity

Filters:

Year
District
Land type

Add downloadable/export actions.

---

# 26. FIELD SURVEY PAGE

Field verification dashboard.

Show:

Active Surveys
Completed Surveys
Pending Verification
Field Officers

Survey cards.

Survey detail:

Location
Parcel
Surveyor
Date
Photos
Coordinates
Observations
Status

Create mock mobile-friendly field survey interface.

---

# 27. PROVENANCE / BLOCKCHAIN PAGE

Make this one visually impressive but technically honest.

Title:

Evidence Provenance

Show verification pipeline:

SOURCE
↓
DOCUMENT
↓
SHA-256 HASH
↓
TIMESTAMP
↓
VERIFICATION
↓
IMMUTABLE RECORD

Show cards:

Hash
Timestamp
Source
Verifier
Status

Status:

VERIFIED

Do not claim a real blockchain transaction unless actually implemented.

For prototype:

"Prototype provenance layer"

---

# 28. ADMIN DASHBOARD

Admin pages:

Users
Verification Queue
Audit Logs
System Health

System health:

API status
GIS service
Evidence service
AI service
Storage
Authentication

Use green status indicators.

---

# 29. USER MANAGEMENT

Table:

User
Role
Organization
Status
Last Active

Actions:

View
Edit
Deactivate

Filters:

Role
Status

---

# 30. AUDIT LOGS

Show:

Timestamp
User
Action
Resource
IP placeholder
Status

Example:

"Policy scenario created"

"Evidence verified"

"Profile updated"

"Report generated"

Use realistic mock data.

---

# 31. NOTIFICATIONS

Notification center.

Types:

Evidence verified
Dispute updated
Policy simulation completed
New research shared
System alert

Unread count.

Mark as read.

Mark all as read.

---

# 32. PROFILE

Profile page.

Avatar.

Fields:

Full name
Email
Organization
Role
Phone
Location
Bio

Buttons:

Edit Profile
Save Changes
Cancel

Persist changes to localStorage.

---

# 33. SECURITY PAGE

Sections:

Password
Two-factor authentication UI
Active sessions
Login history
Security alerts

This is a frontend prototype only.

---

# 34. SETTINGS

Settings:

Appearance
Theme
Notifications
Language
Map preferences
Privacy

---

# 35. THEME SYSTEM

Create multiple professional themes.

Theme options:

1. Midnight Blue
2. Ocean
3. Emerald
4. Royal Purple
5. Slate
6. Light Government
7. High Contrast

Allow user to switch themes instantly.

Persist selection.

Do NOT create ugly rainbow themes.

All themes must preserve accessibility and readability.

---

# 36. SIDEBAR

Sidebar groups:

OVERVIEW

Dashboard

INTELLIGENCE

Map Explorer
Evidence
Evidence Graph
Land Records

ANALYSIS

Policy Simulator
Disputes
Analytics
Field Surveys

RESEARCH

Research Workspace
Reports

TRUST

Provenance
Audit Logs

SYSTEM

Notifications
Profile
Settings

ADMIN

User Management
System Health

Only show admin menu to admin user.

Sidebar:

* collapsible
* responsive
* active state
* tooltip in collapsed mode
* smooth animation
* mobile drawer

---

# 37. TOP NAVBAR

Include:

Global Search

Keyboard shortcut:
Ctrl + K

Notifications

Theme switcher

Help

Profile avatar

User role

Dropdown:

Profile
Settings
Security
Logout

---

# 38. GLOBAL SEARCH

Build a command palette.

Ctrl + K.

Search:

Pages
Districts
Parcels
Evidence
Reports
Policies

Keyboard navigation.

Animated modal.

---

# 39. UNIQUE FEATURE — EVIDENCE CONFIDENCE SCORE

Every evidence item can display:

Confidence:

92%

Breakdown:

Source reliability
Data freshness
Cross-source agreement
Verification status

Use visual circular progress.

IMPORTANT:

Clearly state:

"Prototype confidence model"

Do not present fabricated numbers as official government assessments.

---

# 40. UNIQUE FEATURE — CONFLICT RADAR

Dashboard widget:

Potential conflicts detected.

Example:

Parcel P-1042

Land record:
Agricultural

Satellite:
Residential development

Field survey:
Pending

Status:

REQUIRES VERIFICATION

This is much more useful than generic AI.

---

# 41. UNIQUE FEATURE — EVIDENCE TIMELINE

Every parcel gets:

2019
Land recorded

2021
Mutation

2022
Registration

2024
Satellite land-use change

2025
Field verification

2026
Current status

Make it beautiful and interactive.

---

# 42. UNIQUE FEATURE — DECISION TRACE

For every major AI/policy result add:

"Trace this decision"

Click opens:

Result
↓
Evidence
↓
Dataset
↓
Source
↓
Verification
↓
Timestamp

This should become one of the signature features of LandEvidence AI.

---

# 43. UNIQUE FEATURE — BEFORE / AFTER POLICY MODE

Policy simulator should have:

BEFORE

and

AFTER

map states.

Animate changes.

Show affected regions.

---

# 44. UNIQUE FEATURE — DISTRICT DIGITAL TWIN

Create a simplified visual "District Digital Twin".

District dashboard contains:

Land
Infrastructure
Environment
Disputes
Projects
Policy indicators

Use animated cards and map layers.

Do not create a technically fake 3D GIS engine.

Use visual simulation only.

---

# 45. 3D / MOTION DESIGN

Use Framer Motion throughout the application carefully.

Animations:

* page transitions
* sidebar
* modal
* cards
* KPI counters
* chart entrance
* map panels
* evidence graph
* timeline
* dropdown
* command palette

Use spring animations.

Avoid:

* constant floating animations
* huge parallax
* excessive blur
* heavy particle systems

For the landing page only, optionally use:

React Three Fiber

for a subtle rotating India/globe/geospatial network visual.

For dashboard:

Use CSS-based 3D depth rather than heavy WebGL.

Performance is more important than visual gimmicks.

---

# 46. RESPONSIVENESS

Must work on:

Mobile
Tablet
Laptop
Desktop
Large monitor

Breakpoints:

sm
md
lg
xl
2xl

Mobile:

Sidebar becomes drawer.

Map controls become compact.

Tables become cards/horizontal scroll.

Charts resize.

Dashboard KPI cards stack.

No horizontal overflow.

---

# 47. ACCESSIBILITY

Implement:

* semantic HTML
* keyboard navigation
* visible focus states
* accessible buttons
* aria-labels
* readable contrast
* reduced motion support

If user prefers reduced motion:

disable unnecessary animations.

---

# 48. PERFORMANCE

IMPORTANT:

Application must feel extremely fast.

Use:

* React.lazy
* Suspense
* memoization where useful
* debounced search
* lazy map loading
* avoid unnecessary rerenders
* avoid huge DOM trees
* avoid unnecessary 3D
* optimize images
* reusable components

Do not add animation if it causes lag.

---

# 49. STATIC DATA

Create realistic static datasets.

At least:

30 districts

50+ parcels

40 evidence records

20 disputes

15 policy scenarios

20 reports

30 activities

20 notifications

20 research projects

20 users

Use realistic Indian locations.

Example:

Uttar Pradesh
Lucknow
Gonda
Shravasti
Ayodhya
Kanpur
Prayagraj
Varanasi
Gorakhpur
Agra

But clearly mark prototype/demo datasets where appropriate.

Do not imply synthetic data is official government data.

---

# 50. COMPONENT DESIGN SYSTEM

Create reusable components:

Button
Input
Select
Dropdown
Modal
Drawer
Toast
Badge
Card
StatCard
ChartCard
DataTable
Tabs
Timeline
StatusBadge
Avatar
Tooltip
Breadcrumb
EmptyState
LoadingState
ErrorState
ConfirmDialog
SearchCommand
MapPanel
EvidenceCard
EvidenceGraph
MetricCard
ReportCard
PolicyCard

Do not duplicate components.

---

# 51. UI STATES

Every important page should support:

Loading
Loaded
Empty
Error
Success

Example:

Loading skeleton.

No evidence:

"No evidence found for the selected filters."

Error:

"Unable to load this dataset. Please try again."

---

# 52. TOAST SYSTEM

Create global toast notifications.

Examples:

"Profile updated successfully."

"Policy scenario saved."

"Evidence marked for verification."

"Report generated successfully."

"Theme updated."

---

# 53. DEMO MODE

Add a small "Demo Mode" indicator.

Create demo data controls:

Reset Demo Data

This should reset localStorage.

Add:

"Presentation Mode"

Optional mode that:

* hides unnecessary controls
* increases dashboard density
* highlights key workflow
* automatically loads Lucknow
* makes demo navigation easier

---

# 54. PRESENTATION FLOW

The application should support this exact demo story:

LOGIN

↓

DASHBOARD

↓

SELECT LUCKNOW

↓

OPEN MAP EXPLORER

↓

SELECT LAND PARCEL

↓

OPEN EVIDENCE

↓

SHOW EVIDENCE TIMELINE

↓

OPEN EVIDENCE GRAPH

↓

SHOW SOURCE → EVIDENCE → VERIFICATION

↓

OPEN POLICY SIMULATOR

↓

CHANGE 10% → 15%

↓

RUN SIMULATION

↓

SHOW BEFORE/AFTER IMPACT

↓

GENERATE POLICY REPORT

↓

OPEN REPORT

↓

SHOW DECISION TRACE

This must work flawlessly.

---

# 55. MICRO-INTERACTIONS

Add subtle:

* hover elevation
* icon animations
* active indicator
* smooth page transition
* button press feedback
* chart reveal
* number counting
* skeleton loading
* map panel transition
* drawer transition

Do not overanimate.

---

# 56. COLOR SYSTEM

Default:

Background:
#06111F

Secondary:
#0B1B2D

Panel:
#0F243A

Border:
#1D3A55

Primary:
#2389FF

Secondary Accent:
#19C3A3

Success:
#20C997

Warning:
#FFB547

Danger:
#FF5C5C

Text:
#F4F8FC

Muted:
#8FA7BD

Use CSS variables so themes can override them.

---

# 57. TYPOGRAPHY

Use:

Inter

or

Manrope

Primary font.

Large headings:

clean and bold.

Avoid excessive uppercase text.

Data should be highly readable.

---

# 58. MAP DESIGN

Map should look premium.

Dark map style where possible.

Use:

* boundaries
* markers
* heatmaps
* polygons
* labels
* selected parcel outline

Map legend must be clear.

---

# 59. NO FAKE FUNCTIONALITY

Every visible action must do something.

Bad:

<button>Generate Report</button>

and nothing happens.

Good:

Click → loading → modal → generated report preview → success toast.

Bad:

"Export"

nothing happens.

Good:

Click → simulated export process → success state.

Bad:

"View Details"

nothing happens.

Good:

navigate to detail page.

---

# 60. BACKEND-READY SERVICE LAYER

Even though this is static, create services.

Example:

authService.login()

landService.getParcels()

evidenceService.getEvidence()

policyService.runSimulation()

reportService.generateReport()

Later these can become:

GET /api/v1/parcels
GET /api/v1/evidence
POST /api/v1/policy/simulate

Do not couple components directly to static arrays.

---

# 61. FUTURE LARAVEL COMPATIBILITY

Architecture should eventually support:

Laravel REST API

Laravel Sanctum/JWT

PostgreSQL

PostGIS

Python AI service

Object storage

Vector database

Blockchain provenance

But DO NOT implement these backend technologies now.

Create clean interfaces.

---

# 62. SECURITY UI

Include:

RBAC

Roles:

Admin
Policymaker
District Officer
Researcher
Field Officer
Citizen

Permission-aware navigation.

Example:

Citizen cannot see:

Admin
Audit Logs
User Management

Researcher can see:

Evidence
Research
Reports

Policymaker can see:

Policy Simulator
Analytics
Reports

Admin sees everything.

This is frontend simulation only.

---

# 63. ERROR HANDLING

Create:

404 page

403 page

Generic error boundary

Network simulation error state

Friendly error messages.

---

# 64. EMPTY STATES

Never show blank white/empty panels.

Create beautiful empty states with:

icon
title
description
CTA

---

# 65. FINAL QUALITY BAR

Before finishing:

Check EVERY route.

Check EVERY sidebar item.

Check EVERY button.

Check mobile.

Check tablet.

Check desktop.

Check login.

Check logout.

Check protected routes.

Check profile update.

Check theme persistence.

Check search.

Check filters.

Check modals.

Check dropdowns.

Check charts.

Check map.

Check evidence graph.

Check policy simulator.

Check reports.

Check admin.

Check notifications.

No console errors.

No broken imports.

No missing assets.

No dead links.

No horizontal overflow.

No unnecessary scrollbars.

---

# 66. DO NOT DO THESE THINGS

DO NOT:

* create a generic admin dashboard
* use random stock images everywhere
* make every card glassmorphic
* overuse gradients
* use excessive neon
* use cartoon icons
* create fake AI claims
* claim official government data
* claim real blockchain verification
* claim legal ownership decisions
* use "99.9% accurate AI" without evidence
* create meaningless 3D
* create 100 unnecessary pages
* duplicate pages just to increase page count
* hardcode UI logic everywhere
* put massive datasets inside JSX
* create giant 2000-line components
* use inline styles everywhere
* ignore mobile
* leave buttons nonfunctional

---

# 67. IMPORTANT PRODUCT PRINCIPLE

The application must communicate one central idea:

## "Every decision should be traceable back to evidence."

Therefore repeatedly reinforce:

Evidence
→ Source
→ Verification
→ Spatial Context
→ Analysis
→ Decision

This should visually connect the entire product.

---

# 68. SIGNATURE VISUAL ELEMENT

Create a reusable component:

<DecisionTrace />

It displays:

DECISION

↓

AI / ANALYTICS RESULT

↓

EVIDENCE

↓

DATASET

↓

SOURCE

↓

VERIFICATION

↓

TIMESTAMP

This component should appear in:

* Evidence
* Policy Simulator
* Reports
* Dispute Resolution
* Land Parcel details

This becomes the visual identity of LandEvidence AI.

---

# 69. SIGNATURE DASHBOARD WIDGETS

Dashboard must include:

1. Land Intelligence Map
2. Evidence Confidence
3. Conflict Radar
4. Land Use Change
5. AI Key Insights
6. Evidence Graph
7. Policy Impact
8. Evidence Timeline
9. Recent Activity
10. Verification Status

Arrange them with a sophisticated responsive grid.

---

# 70. FINAL DEVELOPMENT STRATEGY

Build in this order:

PHASE 1
Project setup
Routing
Theme
Layout
Authentication

PHASE 2
Dashboard
Sidebar
Navbar
Reusable components

PHASE 3
Map Explorer
Land records
Parcel details

PHASE 4
Evidence
Evidence Graph
Decision Trace

PHASE 5
Policy Simulator
Analytics
Reports

PHASE 6
Research
Field Surveys
Disputes
Provenance

PHASE 7
Admin
Profile
Settings
Notifications

PHASE 8
Animations
3D
Performance
Responsive optimization

PHASE 9
Final QA

Do not attempt to build everything in one enormous component.

---

# 71. IMPORTANT IMPLEMENTATION INSTRUCTION

Start by inspecting the existing project.

If a React/Vite project already exists:

* preserve useful existing code
* do not destroy working functionality unnecessarily
* refactor where appropriate

If the project is empty:

initialize the architecture above.

Before coding, create:

1. architecture
2. route map
3. design tokens
4. reusable component strategy
5. static data strategy

Then implement.

Do not stop after generating a few pages.

Continue until the complete demo flow is functional.

---

# 72. FINAL OUTPUT EXPECTATION

The final application should feel like:

"Imagine a Ministry of Rural Development analyst opening a national land intelligence platform in 2028."

It should NOT feel like:

"Students made a React admin dashboard."

The difference should come from:

* information architecture
* coherent product story
* GIS
* evidence lineage
* decision trace
* policy simulation
* provenance
* excellent motion design
* polished data visualization
* realistic workflows
* consistent design system
* responsive implementation
* functional interactions

Build the entire frontend accordingly.

START IMPLEMENTATION NOW.
