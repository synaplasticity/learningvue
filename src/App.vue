<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <task>asdasd</task>
    <task>asdasd</task>
  </div>
</template>

// <script>

// export default {
  //   name: 'app',
//   components: {
  //     ToDo
//   }
// }
// </script>
<script>
import HelloWorld from './components/HelloWorld.vue'
import ToDo from './components/ToDo.vue'

export default {
  // name: 'app',
  // components: {
  //   HelloWorld
  // },
  name: 'todo',
  components: {
    ToDo
  }
}

// export default {
//   name: 'todo',
//   components: {
//     ToDo
//   }
// }
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
