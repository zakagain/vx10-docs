---
layout: home
title: VX-10 by Vectura Aerospace
description: VX-10 concept aircraft documentation.
hero:
  name: VX-10
  text: Concept Aircraft by Vectura Aerospace
  tagline: Capable of immense speeds and crewed hypersonic flight.
  image:
    src: /hermeus-mk4.webp
    alt: VX-10
  actions:
    - theme: brand
      text: Explore Documentation
      link: /docs/
    - theme: alt
      text: View on GitHub
      link: https://github.com/vectura-aerospace/vx10-docs
---

<p class="hero-attribution">Hero image courtesy and copyright of Hermeus Aerospace</p>

## Documentation Categories

<div class="doc-categories">

<div class="category-card overview-card">
  <h3>📋 Overview</h3>
  <ul>
    <li><a href="/docs/overview">VX-10 Overview</a></li>
  </ul>
</div>

<div class="category-card">
  <h3>✈️ Aircraft Systems</h3>
  <ul>
    <li><a href="/docs/aerodynamics-the-airframe">Aerodynamics & Airframe</a></li>
    <li><a href="/docs/propulsion-power">Propulsion & Power</a></li>
    <li><a href="/docs/data-links">Data Links</a></li>
  </ul>
</div>

<div class="category-card">
  <h3>🎯 Mission & Operations</h3>
  <ul>
    <li><a href="/docs/mission-profiles">Mission Profiles</a></li>
    <li><a href="/docs/reconnaissance">Reconnaissance</a></li>
    <li><a href="/docs/global-rescue-operations">Global Rescue Operations</a></li>
    <li><a href="/docs/where-to-fly">Where to Fly</a></li>
  </ul>
</div>

<div class="category-card">
  <h3>👨‍✈️ Pilot & Safety</h3>
  <ul>
    <li><a href="/docs/pilot-experience">Pilot Experience</a></li>
    <li><a href="/docs/safety-backups">Safety & Backups</a></li>
    <li><a href="/docs/home-base">Home Base</a></li>
  </ul>
</div>

<div class="category-card">
  <h3>📚 Reference</h3>
  <ul>
    <li><a href="/docs/vibe">Vibe</a></li>
    <li><a href="/docs/vx-10-brief-gallery">VX-10 Brief Gallery</a></li>
    <li><a href="/docs/latex-formatting-guide">LaTeX Formatting Guide</a></li>
  </ul>
</div>

</div>

<style module>
.doc-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.category-card {
  padding: 1.5rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.2s, box-shadow 0.2s;
}

.category-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--vp-shadow-3);
}

.category-card h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--vp-c-brand-1);
}

.category-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-card li {
  margin-bottom: 0.5rem;
}

.category-card a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}

.category-card a:hover {
  color: var(--vp-c-brand-1);
}

.overview-card {
  grid-column: 1 / -1;
  max-width: 400px;
  margin: 0 auto 1.5rem;
  text-align: center;
}

.overview-card h3 {
  font-size: 1.3rem;
}

.overview-card ul {
  display: flex;
  justify-content: center;
}

.hero-attribution {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  font-style: italic;
}

.VPHero :deep(.image-src) {
  max-width: 550px !important;
  max-height: 550px !important;
}

@media (min-width: 960px) {
  .VPHero :deep(.image-src) {
    max-width: 800px !important;
    max-height: 800px !important;
  }
}
</style>

