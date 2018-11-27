<template>
    <div>
        <div v-for="(data, index) in datalist" :key="index" class="item">
            <div>{{data}}</div>
            <div class="close" v-on:click="removeTodo(data, index)">
              <span class="glyphicon glyphicon-remove"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    datalist: {
      type: Array,
      required: true
    }
  },
  name: 'TodoList',
  created () {
    // console.log('Created for list:', this.datalist)
  },
  beforeUpdate () {
    // console.log('Before update:', this.datalist)
  },
  updated () {
    // console.log('After update:', this.datalist)
  },
  methods: {
    removeTodo: function (item, index) {
      this.$emit('remove', index)
    }
  }
}
</script>

<style scoped>
  .item {
    border-bottom: 1px solid #ddd;
    padding: 10px;
  }

  .close {
    float: right;
    margin-top: -14px;
  }
</style>
