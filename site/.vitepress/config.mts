import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VX-10 by Vectura Aerospace',
  description: 'Documentation for the VX-10',
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/' },
    ],
    sidebar: {
      '/docs/': [
        {
          text: 'Documentation',
          collapsible: true,
          items: [
            { text: 'Overview', link: '/docs/overview' },
            { text: 'Aerodynamics & Airframe', link: '/docs/aerodynamics-the-airframe' },
            { text: 'Data Links', link: '/docs/data-links' },
            { text: 'Global Rescue Operations', link: '/docs/global-rescue-operations' },
            { text: 'Home Base', link: '/docs/home-base' },
            { text: 'LaTeX Formatting Guide', link: '/docs/latex-formatting-guide' },
            { text: 'Mission Profiles', link: '/docs/mission-profiles' },
            { text: 'Pilot Experience', link: '/docs/pilot-experience' },
            { text: 'Propulsion & Power', link: '/docs/propulsion-power' },
            { text: 'Reconnaissance', link: '/docs/reconnaissance' },
            { text: 'Safety & Backups', link: '/docs/safety-backups' },
            { text: 'Vibe', link: '/docs/vibe' },
            { text: 'VX-10 Brief Gallery', link: '/docs/vx-10-brief-gallery' },
            { text: 'Where to Fly', link: '/docs/where-to-fly' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vectura-aerospace/vx10-docs' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Vectura Aerospace',
    },
  },
})
