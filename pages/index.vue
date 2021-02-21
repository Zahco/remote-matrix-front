<template>
  <div>
    <h1 class="text-h4">Remote Matrix</h1>
    <v-stepper v-model="step">
      <v-stepper-items>
        <v-stepper-content step="1">
          <ip-form />
        </v-stepper-content>
        <v-stepper-content step="2">
          <matrix-form />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IPForm from '~/components/IPForm.vue'
import MatrixForm from '~/components/MatrixForm.vue'


export default {
  components: { MatrixForm, 'ip-form': IPForm },
  data () {
    return {
      step: 1
    }
  },
  computed: {
    ...mapGetters({
      ip: 'ip/getIp',
    })
  },
  watch: {
    ip: {
      handler () {
        this.step = this.ip ? 2 : 1
      },
      immediate: true
    }
  }
}
</script>

