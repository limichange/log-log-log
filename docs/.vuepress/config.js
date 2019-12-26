// https://limichange.github.io/log-log-log/

module.exports = {
  title: 'log log log',
  description: 'null',
  dest: 'dist',
  plugins: ['tag', 'category'],
  markdown: {
    lineNumbers: true
  },
  base: '/log-log-log/',
  themeConfig: {
    repo: 'limichange.github.io/log-log-log',
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    displayAllHeaders: true, // Default: false
    editLinks: true,
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'JavaScript',
        children: [
          ['javascript/debounce', 'debounce'],
          ['javascript/prototype', 'prototype'],
          ['javascript/throttle', 'throttle'],
          ['javascript/promise', 'promise'],
          ['javascript/clone', 'clone'],
          ['javascript/questions', 'questions']
        ]
      },
      {
        title: 'CSS',
        children: [
          ['css/BFC', 'BFC'],
          ['css/position', 'position']
        ]
      },
      {
        title: 'Vue',
        children: [['vue/start', 'Vue']]
      },
      {
        title: 'xxx',
        children: [['shit/start', 'yyy']]
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
