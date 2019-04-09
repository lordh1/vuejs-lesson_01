<template>
  <div class="home">
    <h1>Welcome to VueJS workshops Home page!</h1>
    <p>This page is an View. But below there is an Component, imported to the View. Following image isn't part of component.</p>
    <img alt="Vue logo" src="../assets/logo.png">
    <Components msg="This is our component."/>
  </div>
</template>

<script>
// @ is an alias to /src
import Components from '@/components/Components/Components.vue'

export default {
  name: 'home',
  components: {
    Components
  }
}
</script>
