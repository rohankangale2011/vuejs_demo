<template>
    <div>
        <div v-for="(data, index) in datalist" :key="index">
            {{data}}
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
    computed: {
        propertyComputed() {
        console.log('I change when this.property changes.')
        }
    },
    created() {
        console.log('Created for list:', this.datalist)
    },
    beforeUpdate() {
        console.log('Before update:', this.datalist);
    },
    updated() {
        console.log('After update:', this.datalist);
  },
}
</script>

