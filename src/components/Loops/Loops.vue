<template>
  <div class="components">
  <h1>JS loops</h1>
  <h3>Today's topics</h3>
  <p v-for="(item, index) in topics" :key="'t'+index">{{index+1}}. {{item}}</p>
  <hr />
  <h3>Loop For In</h3>
  <p v-for="(item, index) in loopForIn()" :key="'lfi'+index">{{index+1}}. {{item}}</p>
  <hr />
  <h3>Loop For Of</h3>
  <p v-for="(item, index) in loopForOf()" :key="'lfo'+index">{{index+1}}. {{item}}</p>
  <hr />
  <h3>Loop For In With Continue</h3>
  <p v-for="(item, index) in loopForInWithContinue()" :key="'lfiwc'+index">{{index+1}}. {{item}}</p>
  <hr />
  <h3>Loop For In With Break</h3>
  <p v-for="(item, index) in loopForWithBreak()" :key="'lfiwb'+index">{{index+1}}. {{item}}</p>
  <hr />
  <h3>Loop While</h3>
  <p v-for="(item, index) in loopWhile()" :key="'lw'+index">{{index+1}}. {{item}}</p>
  <hr />
  <h3>Loop Do While</h3>
  <p v-for="(item, index) in loopDoWhile()" :key="'ldw'+index">{{index+1}}. {{item}}</p>
  </div>
</template>

<script>

export default {
  name: 'Loops',
  props: {
    msg: String
  },
  data() {
    return {
      topics: [
        'functions - basics of basics',
        'if...else',
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
      for(let key in this.car) {
        items.push(key + ": " + this.car[key]);
      }
      return items;
    },
    loopForInWithContinue () {
      let items = [];
      for(let key in this.participants) {
        if(key === "2" || key === "4") continue;
        else if(key === "3") continue;
        else {
          items.push(this.participants[key]);
        }
      }
      return items;
    },
    loopEmptyStatement () {
      for(let i = 0; i < this.participants.length; this.participants[i++]  = 'HaHa...');
    },
    loopForWithBreak() {
      let items = [];
      for(let key in this.participants) {
        if(key === "3") break;
        else {
          items.push(this.participants[key]);
        }
      }
      return items;
    },
    loopWhile() {
      let i = 0;
      let items = [];

      while(i < 5) {
        i++;
        items.push(i)
      }

      return items;
    },
    loopDoWhile() {
      let i = 0;
      let items = [];

      do {
        i++;
        items.push("Element " + i)
      }
      while(i < 0)

      return items;
    },
    loopForOf () {
      let items = [];
      for(let kupa of this.participants) {
        items.push(kupa);
      }
      return items;
    },
  },
  beforeMount() {
    /*Uncomment following code to execute empty statement loop before first rendering of the page content
     You'll see what will happen ;) */

    // this.loopEmptyStatement();
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
