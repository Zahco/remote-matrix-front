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
      label="Text"
    ></v-text-field>
    <v-btn
      class="mr-4 mb-4"
      type="button"
      color="secondary"
      @click="hardClearMatrix"
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
      Send
    </v-btn>
    <v-alert type="success" v-if="success">
      The matrix has been updated
    </v-alert>
    <DevMode />
  </v-form>
</template>

<script>
import Matrix from '~/components/Matrix.vue'
import DevMode from '~/components/devMode/DevMode.vue'
import alpha from '~/plugins/alpha'
import { mapGetters } from 'vuex'

export default {
  components: { Matrix, DevMode },
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
  computed: {
    ...mapGetters({
      ip: 'ip/getIp',
    })
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
      this.$axios.$post(`http://${this.ip}/matrix/api/matrix/state`, { matrix: this.matrix }).then((res) => {
        this.success = true
      }).catch((err) => {
        this.error = err.message
      }).finally(() => {
        this.loading = false
      })
    },
    generateMatrix(line = 8, row = 64) {
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
    hardClearMatrix () {
      this.matrix = this.generateMatrix()
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
      // Remove null value
      for (let i = 0; i < this.matrix.length; ++i) {
        for (let j = 0; j < this.matrix[i].length; ++j) {
          if (this.matrix[i][j] === null || this.matrix[i][j] === undefined) {
            this.$set(this.matrix[i], j, false)
          }
        }
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