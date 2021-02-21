<template>
  <div
    class="matrix-item"
    :class="{ active: value }"
    @click="onClick"
  ></div>
</template>
<script>
export default {
  props: ['value'],
  data () { return {} },
  methods: {
    onClick () {
      this.$emit('input', !this.value)
    }
  }
}
</script>