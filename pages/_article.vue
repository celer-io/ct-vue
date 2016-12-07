<template>
  <div class="user">
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>
    <p><router-link to="/">List of users</router-link></p>
  </div>
</template>

<script>
import _ from 'ramda'
import Articles from '~store/articles'

const handleNotFound = (error) => _.when(_.isNil, () => {
  return error({ message: 'Page not found', statusCode: 404 })
})

export default {
  data ({ params, error }) {
    return handleNotFound(error)(Articles.findBySlug(params.slug))
  }
}
</script>

<style scoped>
.user {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
