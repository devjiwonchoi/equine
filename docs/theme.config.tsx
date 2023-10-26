import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Equine 🎠</span>,
  project: {
    link: 'https://github.com/devjiwonchoi/equine',
  },
  useNextSeoProps() {
    return { titleTemplate: '%s | Equine' }
  },
}

export default config
