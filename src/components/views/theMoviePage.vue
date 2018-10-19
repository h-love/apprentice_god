<template>
  <div class="theMoviePage">
    <video class="c-video" ref="video" :src="this.videoPath" autoplay controls></video>
  </div>
</template>

<script>
import json from '@/assets/data/story.json'

export default {
  name: 'theMoviePage',
  data () {
    return {
      videoPath: '',
      step: '',
      interval: null
    }
  },
  created () {
    this.step = json.story.find(item => item.id === this.$route.params.id)
    this.videoPath = require(`../../assets/videos/${this.step.url}`)
  },
  mounted () {
    this.$refs.video.play()
    this.interval = setInterval(() => {
      let duration = this.$refs.video.duration
      let currentTime = this.$refs.video.currentTime
      if (currentTime >= duration) {
        this.$router.push(`/emission/choix/${this.step.link[0]}`)
      }
    }, 1000)
  },
  watch: {
    '$route' (to, from) {
      this.step = json.story.find(item => item.id === this.$route.params.id)
      this.videoPath = require(`../../assets/videos/${this.step.url}`)
    }
  },
  destroyed () {
    clearInterval(this.interval)
  }
}
</script>
