import articles from '~store/truc'
import _ from 'ramda'

const findBySlug = (slug) => _.find(_.propEq('slug', slug), articles)
// const findBySlug = _.find(_.propEq('slug', _.__), articles)

const getRoutes = _.map(_.prop('slug'), articles)

export { findBySlug, getRoutes }
