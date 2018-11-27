<template>
    <div class="todo-input-container">
        <div class="row">
            <div class="col col-12 col-sm-10 col-md-10 col-lg-10">
                <input type="text" class="form-control" v-model="todoname" />
            </div>
            <div class="col col-12 col-sm-2 col-md-2 col-lg-2">
                <button class="btn btn-primary" v-on:click="addTodo()">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'InputTodo',
  data () {
    return {
      todoname: ''
    }
  },
  methods: {
    addTodo: function () {
      if (this.todoname) {
        this.$emit('todoname', this.todoname)
        this.todoname = ''
      }
    }
  }
}
</script>

<style scoped>
.todo-input-container {
  padding: 10px 0;
}

button {
  background: transparent;
  border: 1px solid #1d6b84;
  color: #1d6b84;
  font-size: 14px;
  width: 100%;
  font-weight: bold;
}

button:hover {
  background: #1d6b84;
  border: 1px solid #1d6b84;
  color: #fff;
}

input {
  font-size: 14px;
  height: 32px;
}
</style>
