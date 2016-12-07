import _ from 'ramda'

const articles = [
  {
    slug: 'toto',
    title: 'truc',
    subtitle: 'chouette !'
  },
  {
    slug: 'tata',
    title: 'troc',
    subtitle: 'chouette !'
  }
]

const findBySlug = (slug) => _.find(_.propEq('slug', slug), articles)
// const findBySlug = _.find(_.propEq('slug', _.__), articles)

const getRoutes = _.map(_.prop('slug'), articles)

export { findBySlug, getRoutes }
