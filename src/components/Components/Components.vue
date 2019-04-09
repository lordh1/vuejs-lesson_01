<template>
  <div class="components">
    <h1 v-if="msg">{{ msg }}</h1>
    <h1 v-else>{{ alternativeMessage }}</h1>
    <p>
      Here, and below there is a text from component's body.
    </p>
    <h3>Templates in VueJS</h3>
    <ul>
      <li>by default VueJS is using HTML templates</li>
      <li>You can use JSX syntax as optional feature</li>
      <li>By the way, Vue creators recommend HTML templates</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      alternativeMessage: "This is the same component as at Homepage. Why is header different? I'll describe on next lesson."
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /*display: inline-block;*/
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
