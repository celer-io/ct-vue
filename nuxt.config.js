const { join } = require('path')

module.exports = {
  router: {
    routes: [
      { path: '/:slug(\\d+)', component: 'pages/_article' }
    ]
  },
  css: [
    { src: 'bootstrap-sass', lang: 'sass' }
  ]
}
