<template>
  <div class="matrix-container" ref="matrix-container">
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
  data () {
    return {
      columnWidth: 25
    }
  },
  computed: {
    lastFillColumn () {
      if (!this.value || !this.value[0]) {
        return 0
      }
      for (let c = this.value[0].length - 1; c >= 0; --c) {
        let fill = false
        for (let l = 0; l < this.value.length; ++l) {
          fill |= this.value[l][c]
        }
        if (fill) {
          return c
        }
      }
    }
  },
  watch: {
    value () {
      this.$nextTick(() => {
        console.log(this.lastFillColumn * this.columnWidth)
        console.log(this.$refs['matrix-container'])
        this.$refs['matrix-container'].scrollTo({
          left: ((this.lastFillColumn + 1) * this.columnWidth) - this.$refs['matrix-container'].offsetWidth,
          behavior: 'smooth'
        })
      })
    }
  },
  methods: {
    onInput () {
      this.$emit('input', this.value)
    }
  }
}
</script>