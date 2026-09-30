# MKT472 International Marketing Labs

Interactive apps and simulations for **MKT472 International Marketing** (BS-BA / BS-BAF), Department of Management Sciences, COMSATS University Islamabad, Wah Campus. Instructor: **Abid Naeem**.

There is one lab for each of the 32 lectures in the course outline. Each lab has a short concept primer, an interactive app (simulation, calculator, decision tool, role-play, classifier or quiz) and discussion questions mapped to the course CLOs.

**Open the labs:** enable GitHub Pages (Settings → Pages → Deploy from branch → `main` / root), then visit `https://<username>.github.io/<repo-name>/`. You can also download the repo and open `index.html` in any browser; no install or internet connection is needed.

## Lab catalogue

| Week | Lecture | Topic | Lab | Type | CLO |
|---|---|---|---|---|---|
| 1 | 1 | Principles of Marketing, Competitive Advantage & Global Industries | [Competitive Advantage & Industry Globalization Lab](apps/L01.html) | Simulation | CLO1 |
| 1 | 2 | Global Marketing Defined & Management Orientations (EPRG) | [EPRG Orientation Diagnostic](apps/L02.html) | Diagnostic | CLO1 |
| 2 | 3 | World Economy Overview & Economic Systems | [Economic Systems Matrix](apps/L03.html) | Interactive map | CLO1 |
| 2 | 4 | Stages of Market Development, Balance of Payments & Trade | [Balance of Payments Builder](apps/L04.html) | Simulation | CLO1 |
| 3 | 5 | WTO, GATT & Preferential Trade Agreements | [Integration Ladder & Trade-Diversion Simulator](apps/L05.html) | Simulation | CLO1 |
| 3 | 6 | Regional Trade & Integration Around the World | [Regional Bloc Explorer](apps/L06.html) | Explorer + quiz | CLO1 |
| 4 | 7 | Society, Culture & High/Low-Context Cultures | [High/Low-Context Negotiation Simulator](apps/L07.html) | Role-play | CLO2 |
| 4 | 8 | Hofstede, Self-Reference Criterion & Diffusion Theory | [Hofstede Comparator + Diffusion Simulator](apps/L08.html) | Simulation | CLO2 |
| 5 | 9 | Political Environment & International Law | [Political Risk Scorecard](apps/L09.html) | Calculator | CLO2 |
| 5 | 10 | IP, Bribery, Conflict Resolution & Regulation | [Legal Dilemmas Game](apps/L10.html) | Decision game | CLO2 |
| 6 | 11 | IT, MIS, Big Data & Market Information Sources | [Market Intelligence Source Evaluator](apps/L11.html) | Classifier | CLO2 |
| 6 | 12 | Formal Market Research (Steps 1–8) & HQ Control | [Research Process Builder + Sample Size Calculator](apps/L12.html) | Sequencer | CLO2 |
| 7 | 13 | Global Market Segmentation | [Global Segment Builder](apps/L13.html) | Classifier | CLO3 |
| 7 | 14 | Market Potential, Targeting & Positioning | [Market Potential & Positioning Lab](apps/L14.html) | Calculator | CLO3 |
| 8 | 15 | Export/Import, National Policies & Tariff Systems | [Landed Cost & Tariff Calculator](apps/L15.html) | Calculator | CLO2 |
| 8 | 16 | Organizing for Exporting, Trade Finance & Payment | [Payment Methods Risk Simulator](apps/L16.html) | Simulation | CLO2 |
| 9 | 17 | Market-Entry: Licensing & Investment | [Entry Mode Selector](apps/L17.html) | Decision tool | CLO4 |
| 9 | 18 | Strategic Partnerships, Asian Cooperative Strategies & Expansion | [Alliance Partner Fit & Expansion Matrix](apps/L18.html) | Simulation | CLO4 |
| 10 | 19 | Branding, Local vs Global Brands & Country of Origin | [Country-of-Origin Effect Lab](apps/L19.html) | Experiment | CLO3 |
| 10 | 20 | Extend, Adapt, Create & New Product Development | [Product–Communication Strategy Matrix](apps/L20.html) | Classifier | CLO3 |
| 11 | 21 | Pricing Concepts, Objectives & Incoterms | [Incoterms 2020 Explorer + Price Escalation](apps/L21.html) | Simulation | CLO3 |
| 11 | 22 | Gray Markets, Dumping, Transfer Pricing & Countertrade | [Gray Market & Transfer Pricing Simulator](apps/L22.html) | Simulation | CLO3 |
| 12 | 23 | Channel Structure, Intermediaries & Global Retail | [Channel Designer](apps/L23.html) | Simulation | CLO3 |
| 12 | 24 | Physical Distribution, Supply Chains & Logistics | [Logistics Total-Cost Optimizer](apps/L24.html) | Simulation | CLO3 |
| 13 | 25 | Global Advertising: Standardization vs Adaptation & Agencies | [Standardize-or-Adapt Advertising Scorer](apps/L25.html) | Decision tool | CLO3 |
| 13 | 26 | Creating Global Advertising, Media & PR | [Global Media Planner & Copy Checker](apps/L26.html) | Simulation | CLO3 |
| 14 | 27 | Sales Promotion & Personal Selling (Consultative Model) | [Promotion ROI + Consultative Selling Role-play](apps/L27.html) | Simulation | CLO5 |
| 14 | 28 | Direct Marketing, Sponsorship & Digital Convergence | [Direct Marketing & Sponsorship Calculator](apps/L28.html) | Calculator | CLO5 |
| 15 | 29 | Global E-Commerce, Web Design & New Digital Products | [Global Website Localization Audit](apps/L29.html) | Audit tool | CLO5 |
| 15 | 30 | Industry Analysis & National Competitive Advantage | [Five Forces & Porter's Diamond Analyzer](apps/L30.html) | Analyzer | CLO5 |
| 16 | 31 | Leadership & Organizing for Global Marketing | [Global Structure Selector](apps/L31.html) | Decision tool | CLO4 |
| 16 | 32 | Lean Production, Ethics & CSR | [CSR Stakeholder Dilemma Simulator](apps/L32.html) | Decision game | CLO4 |

## How to use in class

- **Demonstrate:** project a lab during the lecture and change the sliders live while students predict what will happen.
- **Practise:** students work through the quiz, classifier or role-play tab in pairs, then discuss the debrief.
- **Assign:** use the “Discuss & reflect” questions as short written tasks (CLO6), or ask students to replace the illustrative figures with current data for a country they choose (CLO5).

## Structure

```
index.html          Hub page listing all 32 labs, searchable
assets/style.css    Shared styles (light and dark mode, mobile-friendly)
assets/lib.js       Shared library: page layout, sliders, charts, quiz/sort/sequence/scenario engines
apps/L01–L32.html   One self-contained lab per lecture
```

Plain HTML, CSS and JavaScript with no build step and no external dependencies.

## Notes on data

Figures such as trade-bloc details, Hofstede scores, World Bank income thresholds, CPMs, freight rates and segment sizes are simplified or illustrative, for teaching only. Check the official sources before using them in assignments or research.

Primary text: Cateora, Gilly & Graham, *International Marketing*.
