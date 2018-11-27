<template>
    <div>
        <header>Todo Application</header>
        <InputTodo @todoname="addToList"/>
        <TodoList :datalist="datalist" @remove="removeTodoItem"/>
        <!-- <CardComponent :data="apiData"/> -->
    </div>
</template>

<script>
import CardComponent from './card'
import InputTodo from './todo-input.vue'
import TodoList from './todo-list.vue'
// import {getDataFromServer} from '../services/main.js'

export default {
  components: {CardComponent, InputTodo, TodoList},
  props: ['data'],
  name: 'HomeComponent',
  data () {
    return {
      // apiData: [],
      datalist: []
    }
  },
  created () {
    // getDataFromServer().then(resp => {
    //   this.apiData = resp.data
    // }, err => {
    //   if (err) {
    //     console.log('Error from server')
    //   }
    // })
  },
  methods: {
    addToList: function (data) {
      this.datalist.push(data)
    },
    removeTodoItem: function (ind) {
      this.datalist.splice(ind, 1)
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
