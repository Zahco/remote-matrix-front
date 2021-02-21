<template>
  <div class="matrix-container">
    <div v-for="(row, rowIndex) in value" :key="rowIndex" class="matrix-row">
      <matrix-item 
        v-for="(item, itemIndex) in row" 
        :key="itemIndex"
        v-model="value[rowIndex][itemIndex]"
        @input="onInput"
      ></matrix-item>
    </div>
  </div>
</template>

<script>
import MatrixItem from './MatrixItem.vue'
export default {
  components: { MatrixItem },
  props: {
    value: {
      type: Array
    }
  },
  methods: {
    onInput () {
      this.$emit('input', this.value)
    }
  }
}
</script>