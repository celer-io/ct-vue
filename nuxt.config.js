const { join } = require('path')

module.exports = {
  router: {
// routes: _.map(route => ({path, component:'pages/_article'}), Articles.getPaths())
    routes: [
      { path: '/:slug', component: 'pages/_article' }
    ]
  },
  head: {
    title: 'Arts textiles',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "{{ description }}" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: [
    { src: 'bulma', lang: 'sass' },
    join(__dirname, 'css/main.css')
  ]
}
