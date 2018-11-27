<template>
  <div class="card-container">
    <div class="card-wrapper" v-for="(item, index) in data" :key="index">
      <div class="name">{{item.first_name}}</div>
      <div class="desc">{{item.last_name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  created () {
    console.log('Created for list:', this.datalist)
  },
  updated () {
    console.log('After update:', this.data)
  },
  name: 'CardComponent'
}
</script>

<style scoped>
.card-wrapper {
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
}
</style>
