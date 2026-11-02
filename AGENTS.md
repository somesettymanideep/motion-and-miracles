<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project decisions

- Background music toggles with any click on the page: a click starts it when silent and a click stops it when playing. Links, buttons, form fields and the sound button never trigger that page-click toggle (the sound button has its own toggle). The visitor's manual off choice is remembered; never use muted playback as a substitute for sound, and never let a gesture that starts sound also stop it.

- The three.js zodiac scene (src/scene/ZodiacScene.tsx) is client-only: it is
  React.lazy-imported behind a mounted gate in HeroEmblem; SSR renders a CSS
  fallback ring. Never statically import it from a server-rendered route.
- GSAP is the animation library: page entrances use gsap timelines on
  data-hero-* attributes; scroll reveals use the Reveal component
  (ScrollTrigger, once). Keep animations token/brand based, no dark frames.
- All site copy is bilingual: UI strings live in src/data/site.ts (en is the
  source of truth, te must mirror it — enforced by
  src/test/content-parity.test.ts); service copy lives in
  src/data/services.ts as {en, te} pairs. Pick with useTr()/lang.
- Brand palette comes only from the uploaded emblem (saffron, gold, maroon,
  cream, peach) — no black/dark-grey backgrounds; body text is maroon-brown.
- WhatsApp deep links are built only via src/lib/whatsapp.ts (wa.me/919848256831).
- All site imagery is bundled locally in src/assets and imported through Vite
  (e.g. src/assets/logo.png). Never reference /__l5e/ CDN asset URLs in
  components — they 404 when the project runs outside Lovable (local VS Code
  run).
