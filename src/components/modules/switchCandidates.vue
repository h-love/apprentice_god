<template>
  <div class="p-switchCandidates">
    <img class="p-switchCandidates__img" :src="active ? realityImage:fictionalImage" />
    <div class="p-switchCandidates__txt" ref="txt">
      <h2 v-if="!active" class="p-switchCandidates__txt__title u-noMargin">{{fictionalName}} - {{fictionalAge}}</h2>
      <h2 v-else class="p-switchCandidates__txt__title u-noMargin">{{realityName}}</h2>
      <p v-if="!active" class="p-switchCandidates__txt__description">{{fictionalDescription}}</p>
      <p v-else class="p-switchCandidates__txt__description">{{realityDescription}}</p>
    </div>
    <div class="p-switchCandidates__switch u-clickable" ref="switch" @click="toggleSwitch()">
      <div class="p-switchCandidates__switch__circle" ref="circle">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'switchCandidates',
  props: {
    fictionalImage: String,
    fictionalName: String,
    fictionalAge: String,
    fictionalDescription: String,
    realityImage: String,
    realityName: String,
    realityDescription: String
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    toggleSwitch () {
      this.active = !this.active
      this.$refs.txt.classList.toggle('active')
      this.$refs.switch.classList.toggle('active')
      this.$refs.circle.classList.toggle('active')
    }
  }
}
</script>
