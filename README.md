# CourtPing prototype

Static first-version prototype for a GTA basketball drop-in and court-rental aggregator.

## Preview

https://cynthialiu0805.github.io/courtping/

## Run locally

From this folder:

```powershell
python -m http.server 4173 --directory dist
```

Then open `http://127.0.0.1:4173/`.

## Current scope

- Responsive landing page and finder UI
- Date, venue type, play type, age, booking, and sort controls
- Public and private venue cards with source attribution
- Official-provider link-outs; no booking or payment inside CourtPing
- Prototype map and details dialog
- Basic SEO metadata, `robots.txt`, and sitemap

The current listings are prototype data based on publicly visible schedules checked on October 26, 2026. Availability must always be confirmed with the linked official provider.
