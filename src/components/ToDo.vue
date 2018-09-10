<template>
    <div class="hello">
      <h1>ToDo list</h1>

      <div id='todo'>

        <h1>ToDo list</h1>
        <div id="task">
          <li><slot></slot></li>
            <!-- <li v-for="task in tasks" v-text="task.description"> </li> -->
        </div>

      </div>

    </div>

</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script>

export default {
  name: "ToDo",
  prop: {
    msg: String
  },
  el: "#task",
  data() {
    return {
      tasks: [
      { description: "Get milk", completed: false },
      { description: "Get sode", completed: false },
      { description: "Upgrade Mac", completed: true },
      { description: "Icecream!", completed: false }
    ]
    }
  }
};
</script>

!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>