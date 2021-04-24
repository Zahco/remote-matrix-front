<template>
  <v-main class="ip-step">
    <v-container>
      <v-stepper v-model="step">
        <v-stepper-items>
          <v-stepper-content step="1">
            <ip-form @connexionVerified="onConnexionVerified" />
          </v-stepper-content>
          <v-stepper-content step="2">
            <matrix-form />
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </v-main>
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
  methods: {
    onConnexionVerified () {
      this.step = 2
    }
  }
}
</script>

