import { defineConfig } from 'vitepress'

const repository = 'https://github.com/dhruvi0805/individual_portfolio_'
const research = [
  { text: 'Employer research', link: '/employers' },
  { text: 'Career comparison', link: '/comparison' },
  { text: 'Portfolio plan', link: '/portfolio' },
  { text: 'Peer review', link: '/review' }
]

export default defineConfig({
  title: 'IS 218 Plan Research',
  description: 'Career research and creative programming research for IS 218.',
  base: '/individual_portfolio_/',
  appearance: false,
  head: [['style', { id: 'retro-bauhaus' }, `
:root {
  --vp-c-bg: #fff;
  --vp-c-bg-alt: #fff;
  --vp-c-bg-soft: #fff;
  --vp-c-text-1: #151515;
  --vp-c-brand-1: #283d76;
  --vp-c-brand-2: #243463;
  --vp-c-brand-3: #151515;
  --vp-home-hero-name-color: #151515;
  --vp-home-hero-name-background: none;
  --portfolio-shadow: 0 12px 24px rgba(198, 168, 124, .28);
}
.VPHero .name,
.VPHero .text {
  font-weight: 850;
  letter-spacing: -.055em;
}
.VPHomeFeatures .VPFeature {
  background: #fff;
  border-color: #e6e6e6;
  border-radius: 4px;
  box-shadow: var(--portfolio-shadow);
}
.VPHomeFeatures .VPFeature:hover,
.VPHomeFeatures .VPFeature:focus-visible {
  border-color: #151515;
}
.bauhaus-collage {
  position: relative;
  isolation: isolate;
  width: min(440px, 100%);
  aspect-ratio: 1.6;
  margin: 24px auto 32px;
}
.bauhaus-collage::before {
  content: '';
  position: absolute;
  inset: 42% 4% 41%;
  background: conic-gradient(#151515 25%, white 0 50%, #151515 0 75%, white 0) 0 0 / 26px 26px;
  transform: rotate(-13deg);
  box-shadow: var(--portfolio-shadow);
}
.bauhaus-record {
  position: absolute;
  width: 51%;
  aspect-ratio: 1;
  right: 6%;
  top: 7%;
  border-radius: 50%;
  background: radial-gradient(circle, #151515 0 2%, #e9b2c3 2% 21%, transparent 21%), repeating-radial-gradient(circle, #171717 0 3px, #303030 4px, #171717 5px);
  box-shadow: var(--portfolio-shadow);
}
.bauhaus-print {
  position: absolute;
  width: 35%;
  aspect-ratio: .82;
  top: 7%;
  left: 10%;
  padding: 4% 4% 9%;
  background: #fff;
  border: 1px solid #e6e6e6;
  box-shadow: var(--portfolio-shadow);
  transform: rotate(-9deg);
}
.bauhaus-print::before {
  content: '';
  display: block;
  height: 100%;
  background: radial-gradient(circle at 72% 32%, #e4ac3b 0 13%, transparent 14%), linear-gradient(155deg, #a1b7cc 0 55%, #596b58 56% 70%, #364439 71%);
}
.bauhaus-star {
  position: absolute;
  right: 5%;
  top: 4%;
  color: #151515;
  font-size: clamp(24px, 6vw, 46px);
}
/* Keep the decorative art within the hero without moving its links or text. */
.VPHome:has(.bauhaus-collage) {
  display: flex;
  flex-direction: column;
  position: relative;
}
.VPHome:has(.bauhaus-collage) > .VPHomeFeatures { order: 1; }
@media (min-width: 960px) {
  .VPHero .main { max-width: 53%; }
  .VPHome > .vp-doc.container:has(.bauhaus-collage) {
    position: absolute;
    top: 132px;
    right: max(48px, calc((100% - 1120px) / 2));
    width: min(40%, 440px);
    margin: 0;
    padding: 0;
    pointer-events: none;
  }
  .bauhaus-collage { margin: 0; }
}
`]],
  themeConfig: {
    nav: [
      { text: 'Research', link: '/employers' },
      { text: 'Portfolio plan', link: '/portfolio' },
      { text: 'Creative Project', link: '/creative-plan' }
    ],
    sidebar: [
      { text: 'Review 1 · Career research', items: research },
      {
        text: 'Review 1 · Creative Project',
        items: [
          { text: 'Project plan', link: '/creative-plan' },
          { text: 'Evidence and review', link: '/creative-evidence' }
        ]
      }
    ],
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: repository }],
    editLink: {
      pattern: repository + '/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
