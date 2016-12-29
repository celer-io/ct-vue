const { join } = require('path')
const routeParams = require('./config/routes')

module.exports = {
  router: {
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
    { src: join(__dirname, 'css/main.sass'), lang: 'sass' }
  ],
  generate: {
    routeParams: routeParams
  }
}
