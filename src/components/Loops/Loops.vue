<template>
  <div class="components">
  <h1>JS loops</h1>
  <h3>Today's topics</h3>
  <p v-for="(item, index) in topics" :key="'t'+index">{{index+1}}. {{item}}</p>
  <hr />
  <h3>Loop For In</h3>
  <p v-for="(item, index) in loopForIn()" :key="'lfi'+index">{{index+1}}. {{item}}</p>
  <hr />
  <h3>Loop For In With Continue</h3>
  <p v-for="(item, index) in loopForInWithContinue()" :key="'lfiwc'+index">{{index+1}}. {{item}}</p>
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
      topics: [
        'functions - basics of basics',
        'empty statement',
        'break',
        'continue',
        'while',
        'do...while',
        'for...in',
        'for...of'
      ],
      car: {
        "vendor": "Volkswagen",
        "model": "Golf",
        "engine": 2.0,
        "fuel": "petrol",
        "power": 310
      },
      participants: [
        "Jaś", "Zosia", "Zenek", "Krzyś", "Dawid"
      ]
    }
  },
  methods: {
    loopForIn () {
      let items = [];
      for(let key in this.participants) {
        items.push(this.participants[key]);
      }
      return items;
    },
    loopForInWithContinue () {
      let items = [];
      for(let key in this.participants) {
        if(key === "2") continue;
        items.push(this.participants[key]);
      }
      return items;
    }
  },
  mounted() {
    this.loopForIn();
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
