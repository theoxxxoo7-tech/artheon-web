# Guides

Drop the renovation guide PDF here once written.

Expected filename:

```
artheon-renovation-guide.pdf
```

The `/api/guide` endpoint references this path. The visitor never downloads
the PDF directly from the browser — the endpoint captures their email,
then (once a delivery channel is wired up in `app/api/guide/route.ts`)
either emails them the PDF or a signed download link.

## Working title options for the founder

1. **The Reading Homeowner's Renovation Guide** — strongest local-SEO fit
2. **Planning a Premium Renovation: A Calm Guide for Homeowners** — broader
3. **The Renovation Planning Checklist: How Organised Homeowners Plan** — task-oriented

The site copy currently uses option 1. Change the `leadMagnet.title` in
`lib/content.ts` when a final title is chosen.

## Suggested document structure (12 pages)

1. Cover — title, subtitle, the Artheon wordmark
2. Note from the founder — calm, plain English, no sales pitch
3. Five honest budget bands and what each actually buys
4. Seven questions to ask any renovation company before you commit
5. Reading-specific notes — access, parking, waste removal, conservation areas
6. A simple project timeline template (printable)
7. Materials direction at each budget level
8. What "premium" actually means in practice
9. The trade-offs no one mentions (storage, lighting, ventilation)
10. The handover checklist most renovations skip
11. Glossary — the words contractors use that homeowners shouldn't have to learn
12. Back cover — single CTA: "When you're ready, book a consultation."
