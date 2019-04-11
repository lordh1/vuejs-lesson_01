<template>
  <div class="components">
    <button @click="addElement" :disabled="checkInput()">Add</button>
    <input type="text" v-model="newElement" />
    <div v-for="(item, index) in tableOfElements" v-bind:key="index">{{item}} <button @click="removeElement(index)">Remove</button></div>
  </div>
</template>

<script>

export default {
  name: 'Form',
  props: {
    msg: String
  },
  data() {
    return {
      alternativeMessage: "This is the same component as at Homepage. Why is header different? I'll describe on next lesson.",
      tableOfElements: [],
      newElement: ""
    }
  },
  methods: {
    checkInput() {
      return !this.newElement.length;
    },
    addElement() {
      this.tableOfElements = [...this.tableOfElements, this.newElement];
    },
    removeElement(index) {
      this.tableOfElements = this.tableOfElements.filter((item, key) => key != index);
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
