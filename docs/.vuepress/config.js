module.exports = {
  title: 'log log log',
  description: 'null',
  dest: 'dist',
  plugins: ['tag', 'category'],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    displayAllHeaders: true, // Default: false
    sidebar: [
      {
        title: 'javascript',
        collapsable: false,
        children: [
          ['javascript/debounce', 'debounce'],
          ['javascript/prototype', 'prototype']
        ]
      }
    ],
    nav: [
      {
        text: 'External',
        link: 'https://google.com',
        target: '_self',
        rel: ''
      },
      { text: 'Guide', link: '/guide/', target: '_blank' },
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ]
  }
}
