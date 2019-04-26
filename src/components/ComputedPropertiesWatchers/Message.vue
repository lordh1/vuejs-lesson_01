<template>
  <div>
    <h1>Message</h1>
    <section>
      <input type="text" v-model="customMessage">
      <button @click="submit">Submit</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      customMessage: ""
    }
  },
  methods: {
    submit(e) {
      console.log(e);
      this.$emit('click', this.customMessage)
    }
  }
}
</script>

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

section {
  margin: 20px;
  border: 1px solid red;
}

input {
  padding: 10px;
  margin: 10px;
  font-size: 20px;
}

button {
  background-color: #0055BB;
  color: #FFFFFF;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
}

.badWord {
  color: red;
}
</style>
