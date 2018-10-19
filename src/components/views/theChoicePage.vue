<template>
  <div class="theChoicePage">
    <video class="c-video" ref="video" :src="this.videoPath" autoplay></video>
    <router-link class="c-btn--nextStep c-btn--nextStep--left" ref="linkLeft" :to="`/emission/${this.step.link[0]}`"></router-link>
    <router-link class="c-btn--nextStep c-btn--nextStep--right" ref="linkRight" :to="`/emission/${this.step.link[1]}`"></router-link>
  </div>
</template>

<script>
import json from '@/assets/data/story.json'

export default {
  name: 'theChoicePage',
  data () {
    return {
      videoPath: '',
      step: ''
    }
  },
  created () {
    this.step = json.story.find(item => item.id === this.$route.params.id)
    this.videoPath = require(`../../assets/videos/${this.step.url}`)
  },
  mounted () {
    window.addEventListener('resize', this.handleResize, false)
    this.setBtnHeight(this.$refs.linkLeft.$el)
    this.setBtnHeight(this.$refs.linkRight.$el)
  },
  methods: {
    handleResize () {
      this.setBtnHeight(this.$refs.linkLeft.$el)
      this.setBtnHeight(this.$refs.linkRight.$el)
    },
    setBtnHeight (element) {
      const videoHeight = this.$refs.video.offsetHeight
      element.style.height = videoHeight * 0.145 + 'px'
    }
  },
  watch: {
    '$route' (to, from) {
      this.step = json.story.find(item => item.id === this.$route.params.id)
      this.videoPath = require(`../../assets/videos/${this.step.url}`)
    }
  }
}
</script>
