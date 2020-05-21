// https://limichange.github.io/log-log-log/

const path = require('path')

module.exports = {
  title: 'log log log',
  description: "limichange's blog",
  dest: 'dist',
  plugins: [
    'tag',
    'category',
    'autobar',
    [
      '@vuepress/google-analytics',
      {
        'ga': '233462683', // UA-00000000-0
      },
    ],
  ],
  markdown: {
    // lineNumbers: true
  },
  serviceWorker: false,
  base: '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'public', 'assets'),
      },
    },
  },
  themeConfig: {
    repo: 'limichange/log-log-log',
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    displayAllHeaders: false, // Default: false
    editLinks: true,
    sidebarDepth: 2,
    nav: [
      // {
      //   text: 'External',
      //   link: 'https://google.com',
      //   target: '_self',
      //   rel: ''
      // },
      // { text: 'Guide', link: '/guide/', target: '_blank' },
      // { text: 'Home', link: '/' },
      // { text: 'Guide', link: '/guide/' },
      // { text: 'External', link: 'https://google.com' }
    ],
  },
}
