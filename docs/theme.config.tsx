import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <Image
      src="/equine.svg"
      alt="Equine Logo"
      width="48"
      height="48"
      style={{ filter: 'invert(1)' }}
    />
  ),
  head: (
    <>
      <link
        rel="icon"
        type="image/x-icon"
        href="/equine.svg"
        style={{ filter: 'revert' }}
      />
    </>
  ),
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://equine.vercel.app" target="_blank">
          Equine
        </a>
        .
      </span>
    ),
  },
  project: {
    link: 'https://github.com/devjiwonchoi/equine',
  },
  useNextSeoProps() {
    return { titleTemplate: '%s | Equine' }
  },
}

export default config
