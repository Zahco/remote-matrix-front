<template>
  <v-form @submit.prevent="submit" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="ip"
            :rules="ipRules"
            label="Raspberry IP address"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            class="mr-4"
            type="submit"
            color="secondary"
            :disabled="!valid || loading"
            :loading="loading"
          >
            Connexion
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapMutations } from 'vuex'
 
export default {
  data () {
    return {
      valid: false,
      ip: '',
      ipRules: [
        v => !!v || 'IP is required',
        v => v.match(/^([0-9]{1,3}\.){3}([0-9]{1,3})$/) != null || 'Invalid IP address',
      ],
      loading: false
    }
  },
  methods: {
    ...mapMutations({
      setIp: 'ip/setIp',
    }),
    submit () {
      this.loading = true
      console.log(this.ip)
      setTimeout(() => {
        this.loading = false
        this.setIp(this.ip)
      }, 2000)
    }
  }
}
</script>