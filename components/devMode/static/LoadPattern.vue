<template>
  <v-row class="mb-2" dense>
    <v-col cols="9">
      <v-btn color="secondary" block>
        Load Pattern
      </v-btn>
    </v-col>
    <v-col cols="3">
      <v-text-field v-model="size" type="number" dense outlined hide-details></v-text-field>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      size: 64
    }
  }
}
</script>