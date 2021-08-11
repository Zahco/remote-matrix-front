<template>
  <div>
    <div class="text-right">
      <v-switch
        class="d-inline-flex"
        v-model="devMode"
        label="Developper mode"
      ></v-switch>
    </div>
    <div v-if="devMode" class="dev-mode-container">

      <v-tabs
        v-model="tab"
        background-color="transparent"
        grow
        class="mb-3"
      >
        <v-tab key="static">Static</v-tab>
        <v-tab key="scroll">Scroll</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" >
        <v-tab-item key="static">
          <StaticInitRam />
          <StaticLoadPattern />
          <StaticRunPattern />
          <StaticRazAll />
        </v-tab-item>
        <v-tab-item key="scroll">
          <ScrollerInitRam />
          <ScrollerLoadPattern />
          <ScrollerRunPattern />
          <ScrollerTempo />
          <ScrollerRazAll />
        </v-tab-item>
      </v-tabs-items>
        
      <div v-if="!isDev" class="dev-mode-check-access">
        <p class="ma-0">With great power comes great responsibility</p>
        <v-container fluid class="enigma-container">
          <span class="mr-2">{{ showDevEnigmaSolution }} = </span>
          <div>
            <v-text-field dense outlined hide-details v-model="devEnigma" class="input-enigma"></v-text-field>
          </div>
        </v-container>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import StaticInitRam from '~/components/devMode/static/InitRam.vue'
import StaticRazAll from '~/components/devMode/static/RazAll.vue'
import StaticLoadPattern from '~/components/devMode/static/LoadPattern.vue'
import StaticRunPattern from '~/components/devMode/static/RunPattern.vue'
import ScrollerInitRam from '~/components/devMode/scroll/InitRam.vue'
import ScrollerRazAll from '~/components/devMode/scroll/RazAll.vue'
import ScrollerLoadPattern from '~/components/devMode/scroll/LoadPattern.vue'
import ScrollerRunPattern from '~/components/devMode/scroll/RunPattern.vue'
import ScrollerTempo from '~/components/devMode/scroll/ScrollerTempo.vue'

export default {
  components: { 
    StaticInitRam, StaticRazAll, StaticLoadPattern, StaticRunPattern, 
    ScrollerInitRam, ScrollerRazAll, ScrollerLoadPattern, ScrollerRunPattern, ScrollerTempo
  },
  data () {
    return {
      devMode: false,
      devEnigma: null,
      devEnigmaSolution: 9,
      tab: null
    }
  },
  computed: {
    ...mapGetters({
      isDev: 'user/isDev',
    }),
    showDevEnigmaSolution () {
      let res = this.devEnigmaSolution.toString(2)
      for (let i = res.length; i < 4; ++i) {
        res = '0' + res
      }
      return res
    }
  },
  watch: {
    devEnigma () {
      if (this.devEnigma == this.devEnigmaSolution) {
        this.setIsDev(true)
      }
    }
  },
  mounted () {
    this.devEnigmaSolution = (Math.floor(Math.random() * 13)) + 3
  },
  methods: {
    ...mapMutations({
      setIsDev: 'user/setIsDev',
    }),
  }
}
</script>