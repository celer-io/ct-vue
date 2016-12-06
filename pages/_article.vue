<template>
  <div class="user">
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>
    <p>Email : {{ email }}</p>
    <p><router-link to="/">List of users</router-link></p>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data ({ params }) {
    // return axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    // .then((res) => res.data)
    // .catch(() => {
    //   error({ message: 'User not found', statusCode: 404 })
    // })
    console.log('${params.slug} :', ${params.slug})
    return {name: 'toto', username: 'totoA', email: 'toto@mail.com'}
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
