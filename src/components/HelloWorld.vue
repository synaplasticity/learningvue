<template>
  <div class="hello">
    <h1>Welcome to ToDo App</h1>
    <h2>All tasks</h2>
      <ul>
        <li v-for="task in tasks" v-text="task.description" :key="task.id"></li>
      </ul>

    <h2>Pending tasks</h2>
      <ul>
        <li v-for="task in pendingTasks" v-text="task.description" :key="task.id"/>
      </ul>
  </div>
</template>


<script>
export default {
  name: "HelloWorld",
  // props: {
  //   tasks: [
  //     { id:0, description: "Get milk", completed: false },
  //     { id:1, description: "Get sode", completed: false },
  //     { id:2, description: "Upgrade Mac", completed: true },
  //     { id:3, description: "Icecream!", completed: false }
  //   ]
  // }
  data() {
    return {
      tasks: [
        { id: 0, description: "Get milk", completed: false },
        { id: 1, description: "Get sode", completed: false },
        { id: 2, description: "Upgrade Mac", completed: true },
        { id: 3, description: "Icecream!", completed: false }
      ]
    };
  },
  computed: {
     pendingTasks() {
      return this.tasks.filter(task => ! task.completed)
    }   
  },
  methods: {
  }
};

// var app = new Vue({
//   props: ['todo'],
//   el: "#app",

//   computed: {
//     pendingTasks() {
//       return this.tasks.filter(task => ! task.completed)
//     }
//   }  
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: square ;
  padding: 0;
}
li {
  align-items: left;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
