<template>
  <v-row class="mb-2">
    <v-col cols="6" md="4">
      <v-btn color="secondary" block>
        Scroller Tempo
      </v-btn>
    </v-col>
    <v-col cols="6" md="8">
      <v-slider
        min="0"
        max="64"
        v-model="tempo"
        step="2"
        thumb-label
        hide-details
      ></v-slider>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      tempo: 32
    }
  }
}
</script>