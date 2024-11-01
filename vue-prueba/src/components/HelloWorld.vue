<template>
  <div>
    <div class="titulo">
      <h1>Mis tareas</h1>

      <ul>
        <li v-for="task in tasks" :key="task">{{ task }}</li>
      </ul>
    </div>

    <div>
      <input
        v-model="task"
        placeholder="Escribe una tarea"
        @keypress.enter="addTask"
      />
      <button @click="addTask">Añadir Tarea</button>
      <ul>
        <li v-for="task in tasks" :key="task">{{ task }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: "", // Aquí almacenaremos la nueva tarea ingresada
      tasks: [], // Lista de tareas que se mostrarán en pantalla
    };
  },
  methods: {
    addTask() {
      if (this.task) {
        this.tasks.push(this.task);
        this.task = ""; // Limpia el campo de entrada
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
