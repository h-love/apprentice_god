<template>
  <div class="theBackstagePage o-section__100vh">
    <nav-main />
    <div class="grid-container">
      <div class="grid-x align-center align-middle">
        <h1 class="u-positionAbsolute u-top0">Les coulisses</h1>
        <div class="cell medium-7 small-8 flex-container flex-dir-column align-center p-carousel--ctt">
          <carousel
            class="p-carousel"
            :dots="false"
            :nav="false"
            :responsive="{0:{items:1, loop:true},600:{items:3}}"
          >
            <img
              v-for="(image, index) in backstageData"
              :key="index"
              :src="image"
            />
            <template ref="prev" slot="prev"><font-awesome-icon class="p-carousel__prev u-clickable  flex-container align-middle" icon="chevron-left" /></template>
            <template slot="next"><font-awesome-icon class="p-carousel__next u-clickable  flex-container align-middle" icon="chevron-left" /></template>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import json from '@/assets/data/backstage.json'
import Carousel from 'vue-owl-carousel'
import NavMain from '@/components/modules/navMain'

export default {
  name: 'theBackstagePage',
  components: {
    Carousel,
    NavMain
  },
  data () {
    return {
      backstageData: json.backstage
    }
  },
  mounted () {
    this.$refs.prev.style.display = 'block'
  }
}
</script>
