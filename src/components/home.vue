<template>
    <div>
        <header>Todo Application</header>
        <InputTodo @todoname="addToList"/>
        <TodoList :datalist="datalist"/>
    </div>
</template>

<script>
import InputTodo from './todo-input.vue';
import TodoList from './todo-list.vue';

export default {
  components: {InputTodo, TodoList},
  props: ['data'],
  name: 'HomeComponent',
  data() {
      return {
          datalist: []
      }
  },
  created: function () {
    console.log('user data from parent component:')
    console.log(this.data)
  },
  methods: {
      addToList: function(data) {
          this.datalist.push(data);
          console.log('From parent:', data, this.datalist);
      }
  }
}
</script>

<style scoped>
    header {
        background: #00BCD4;
        color: #fff;
        padding: 15px;
        font-size: 20px;
    }
</style>

