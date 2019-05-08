<template>
  <div class="components">
    <h1>JS functions</h1>
    <p v-for="(item, index) in randomArray" :key="index">{{item}}</p>
  </div>
</template>

<script>

  function generateArray () { // ES5 style
    let data = [];
    for(let i = 0; i < 10; i++) {
      data.push(Math.floor(Math.random() * 100));
    }
    return data;
  }

  export default {
    name: 'Loops',
    props: {
      msg: String
    },
    data() {
      return {
        randomArray: generateArray()
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
