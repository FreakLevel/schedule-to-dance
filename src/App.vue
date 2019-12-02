<template>
  <div id="app">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <keep-alive>
      <div v-if="step === 0" >
        
      </div>
      <div v-else-if="step === 1" >
      </div>
      <div v-else >
      </div>
    </keep-alive>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    //HelloWorld
  },
  data: function () {
    return {
      step: 0,
      appointments: null
    }
  },
  mounted() {
    axios.get('api/appointments').then(response => this.appointments = response.data)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
