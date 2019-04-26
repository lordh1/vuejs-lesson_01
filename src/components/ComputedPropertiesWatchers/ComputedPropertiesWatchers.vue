<template>
  <div>
    <h1>Computed Properties & Watchers</h1>
    <section>
      <h2>1. Custom events</h2>
      <Message @click="wasSubmited" />
    </section>
    <section>
      <h2>1. Form with computed property</h2>
      <input type="text" v-model="inputMessage">
      <button @click="submit()">Submit</button>
      <p>{{alertMessage}}</p>
      <p v-if="badWord" class="badWord">Bad word</p>
    </section>
    <section>
      <h2>1. Form with computed property</h2>
      <input v-for="(item, key) in inputs" :key="key" type="text" v-model="inputs[key]">
      <button @click="submit()">Submit</button>
      <p>{{alertMessage}}</p>
      <p v-if="badWord" class="badWord">Bad word</p>
    </section>
    <section>
      <h2>2. Time counter</h2>
      <h3>counter: {{counter}}</h3>
      <p v-for="(item, key) in tens" :key="key">{{item}}</p>
    </section>
  </div>
</template>

<script>
import { setInterval, setTimeout } from 'timers';
import Message from "./Message";

export default {
  name: 'ComputedPropertiesWatchers',
  components: {Message},
  data() {
    return {
       counter: 0,
       tens: [],
       submited: false,
       inputMessage: "",
       badWord: false,
       inputs: [
         "", "", ""
       ]
    }
  },
  methods: {
    count() {
      this.counter++;
      setInterval(() => {
        this.counter++;
      }, 1000);
    },
    submit() {
      this.inputMessage = "";
      this.submited = true;
    },
    wasSubmited(message) {
      alert("Message was submited! " + message);
    }
  },
  mounted() {
    this.count();
  },
  computed: {
    alertMessage() {
      if(this.submited) return "Message is submitted...";
      else if(this.inputMessage) return "Please submit your message. Current counter value is: " + this.counter;
      else return "";
    }
  },
  watch: {
    counter(newValue, oldValue) {
      if(newValue > oldValue && !(newValue % 10)) !this.tens.length ? this.tens[0] = 'First ten seconds passed...' : this.tens = [...this.tens, 'Another ten seconds passed...']
    },
    tens: function(newValue, oldValue) {
      if(newValue > oldValue) if(this.tens.length >= 6) this.tens = ['Too much records... Resetting!'];
    },
    submited(newValue, oldValue) {
      if(newValue && !oldValue && this.submited) {
        setTimeout(() => {
          this.submited = false;
        }, 5000);
      }
    },
    inputMessage(newValue) {
      if(newValue.includes("kurwa")) this.badWord = true;
      else this.badWord = false;
    },
    inputs(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
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
