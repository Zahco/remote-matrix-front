<template>
  <v-form v-model="valid" @submit.prevent="onSubmit">
    <matrix v-model="matrix" class="mb-4" />
    <!-- <div class="ml-4">
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
    </div> -->
    <v-text-field
      v-model="word"
      label="Mot"
    ></v-text-field>
    <v-btn
      class="mr-4 mb-4"
      type="button"
      color="secondary"
      @click="clearMatrix"
    >
      Clear
    </v-btn>
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
import alpha from '~/plugins/alpha'

export default {
  components: { Matrix },
  data () {
    return {
      valid: false,
      matrix: [],
      scroll: false,
      loading: false,
      success: false,
      word: ''
    }
  },
  watch: {
    word () {
      this.updateMatrixByWord()
    }
  },
  created () {
    this.matrix = this.generateMatrix()
  },
  methods: {
    onSubmit () {
      this.loading = true
      this.success = false
      setTimeout(() => {
        this.loading = false
        this.success = true
      }, 2000)
    },
    generateMatrix(line = 8, row = 16) {
      let matrix = []
      for (let i = 0; i < line; ++i) {
        let line = []
        for (let j = 0; j < row; ++j) {
          line.push(false)
        }
        matrix.push(line)
      }
      return matrix
    },
    clearMatrix () {
      for (let i = 0; i < this.matrix.length; ++i) {
        for (let j = 0; j < this.matrix[i].length; ++j) {
          this.$set(this.matrix[i], j, false)
        }
      }
    },
    updateMatrixByWord () {
      this.clearMatrix()
      let offset = 0
      for (let c = 0; c < this.word.length; ++c) {
        let submatrix = alpha.getMatrix(this.word[c].toLowerCase())
        let maxRow = this.printSubMatrix(submatrix, offset)
        offset += maxRow + 2
      }
    },
    printSubMatrix(matrix, offset) {
      let maxRow = 0
      for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
          maxRow = Math.max(maxRow, j)
          this.$set(this.matrix[i], offset + j, matrix[i][j])
        }
      }
      return maxRow
    }
  }
}
</script>