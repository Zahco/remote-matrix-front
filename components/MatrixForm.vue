<template>
  <v-form v-model="valid" @submit.prevent="onSubmit">
    <matrix v-model="matrix" class="mb-4" />
    <div class="ml-4">
      <v-switch
        v-model="scroll"
        label="Scroll"
      ></v-switch>
    </div>
    <div class="ml-4 mb-4">
      <v-checkbox
        v-model="scroll"
        label="Scroll"
      ></v-checkbox>
    </div>
    <v-btn
      class="mr-4 mb-4"
      type="submit"
      color="secondary"
      :disabled="!valid || loading"
      :loading="loading"
    >
      Envoyer
    </v-btn>
    <v-alert type="success" v-if="success">
      The matrix has been updated
    </v-alert>
  </v-form>
</template>

<script>
import Matrix from '~/components/Matrix.vue'

export default {
  components: { Matrix },
  data () {
    return {
      valid: false,
      matrix: [
        [false, true, true, false, true, true, false, true, true],
        [false, true, false, false, true, false, false, true, false],
        [true, false, true, true, false, true, true, false, true],
        [true, false, true, true, false, true, true, false, true],
        [true, false, true, true, false, true, true, false, true],
        [true, false, true, true, false, true, true, false, true],
      ],
      scroll: false,
      loading: false,
      success: false
    }
  },
  methods: {
    onSubmit () {
      this.loading = true
      this.success = false
      setTimeout(() => {
        this.loading = false
        this.success = true
      }, 2000)
    }
  }
}
</script>