<template>
  <v-form @submit.prevent="submit" v-model="valid">
    <v-container>
      <div>
        <v-text-field
          v-model="ip"
          :rules="ipRules"
          label="Raspberry IP address"
          required
        ></v-text-field>
      </div>
      <div v-if="error">
        <v-alert type="error">
          The server is not reachable: "{{ error }}". 
        </v-alert>
      </div>
      <div class="text-center">
        <v-btn
          class="mr-4"
          type="submit"
          color="primary"
          :disabled="!valid || loading"
          :loading="loading"
        >
          Connexion
        </v-btn>
      </div>
    </v-container>
  </v-form>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
 
export default {
  data () {
    return {
      valid: false,
      ip: '',
      ipRules: [
        v => !!v || 'IP is required',
        v => (!!v && v.match(/^([0-9]{1,3}\.){3}([0-9]{1,3})(\:[0-9]{1,5})?$/) != null) || 'Invalid IP address',
      ],
      loading: false,
      error: false
    }
  },
  computed: {
    ...mapGetters({
      storedIp: 'ip/getIp',
    })
  },
  mounted () {
    if (this.storedIp) {
      this.ip = this.storedIp
    }
  },
  methods: {
    ...mapMutations({
      setIp: 'ip/setIp',
    }),
    submit () {
      // this.loading = true
      // this.error = false
      // this.$axios.$get(`http://${this.ip}/matrix/api/ping`).then(() => {
      //   this.setIp(this.ip)
      //   this.$emit("connexionVerified", this.ip)
      // }).catch((err) => {
      //   this.error = err.message
      // }).finally(() => {
      //   this.loading = false
      // })
      this.setIp(this.ip)
      this.$emit("connexionVerified", this.ip)
    }
  }
}
</script>