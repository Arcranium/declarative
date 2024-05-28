import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Declarative',
  description: 'Vitepress documentation for declarative',
  lang: 'en-US',
  base: '/declarative/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/arcranium/declarative' },
    ],
  },
})
