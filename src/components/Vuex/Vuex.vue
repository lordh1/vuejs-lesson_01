<template>
  <div>
    <div v-show="loader" class="cover">
      <button @click="setLoader(false)">Close</button>
    </div>
    <h1>Vuex</h1>
    <p><strong>Loader state:</strong> {{loader}}</p>
    <p><button @click="setLoader(true)">set loaded</button></p>
    <p><button @click="setLoader(false)">set not loaded</button></p>
    <p><button @click="apiGetCars">getCars</button></p>

    <h1>Cars</h1>
    <p v-for="(item, index) in cars" :key='index'>{{item.model}}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';


export default {
  name: 'Vuex',
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations('global', [
      'setLoader'
    ]),
    ...mapActions('vuex', [
      'apiGetCars'
    ])
  },
  mounted() {
  },
  computed: {
    ...mapState({
      loader: state => state.global.loader
    }),
    ...mapState({
      cars: state => state.vuex.cars
    }),
    ...mapGetters('global', [
      'getLoader'
    ])
  }
}
</script>

<style scoped lang="scss">
.cover {
  position: fixed;
  background: #000000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

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

button:hover {
  cursor: pointer;
}

.badWord {
  color: red;
}
</style>
