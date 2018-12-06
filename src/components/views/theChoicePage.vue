<template>
  <div class="theChoicePage">
    <video class="c-video" ref="video" :src="this.videoPath" autoplay></video>
    <router-link class="c-btn--nextStep c-btn--nextStep--left"
      ref="linkLeft" :to="`/emission/${this.step.link[0]}`"
      @click.native="updateDB(true)"
    ></router-link>
    <router-link class="c-btn--nextStep c-btn--nextStep--right"
      ref="linkRight" :to="`/emission/${this.step.link[1]}`"
      @click.native="updateDB(false)"
    ></router-link>
  </div>
</template>

<script>
import firebase from 'firebase'
import json from '@/assets/data/story.json'

export default {
  name: 'theChoicePage',
  data () {
    return {
      videoPath: '',
      step: '',
      interval: ''
    }
  },
  created () {
    this.step = json.story.find(item => item.id === this.$route.params.id)
    this.videoPath = require(`../../assets/videos/${this.step.url}`)
  },
  mounted () {
    this.$refs.video.play()
    window.addEventListener('resize', this.handleResize, false)
    this.setBtnHeight(this.$refs.linkLeft.$el)
    this.setBtnHeight(this.$refs.linkRight.$el)
    this.interval = setInterval(() => {
      let duration = this.$refs.video.duration
      let currentTime = this.$refs.video.currentTime
      if (currentTime >= duration) {
        this.updateDB('default')
        this.$router.push(`/emission/${this.step.linkDefault}`)
      }
    }, 1000)
  },
  methods: {
    handleResize () {
      this.setBtnHeight(this.$refs.linkLeft.$el)
      this.setBtnHeight(this.$refs.linkRight.$el)
    },
    setBtnHeight (element) {
      const videoHeight = this.$refs.video.offsetHeight
      element.style.height = videoHeight * 0.145 + 'px'
    },
    updateDB (bool) {
      const field = this.step.id
      let data

      if (bool === 'default') {
        data = this.step.linkDefault
      } else {
        data = bool ? this.step.link[0] : this.step.link[1]
      }

      localStorage[field] = bool ? this.step.answers[0] : this.step.answers[1]
      const db = firebase.database()
      const ref = db.ref('/')
      const playersRef = ref.child('players')
      const choiceRef = playersRef.child(localStorage.player)
      choiceRef.update({
        [field]: data
      })
    }
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
