</<template>
  <div class="navMain c-navMain flex-container align-center">
    <router-link :to="item.path" v-for="item in nav" :key="item.text" class="c-navMain__element" :class="{ active: item.path === $route.path }">
      <div v-html="item.image"></div>
      {{item.text}}
    </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nav: [
        {
          text: `L'émission`,
          image: `<svg class="c-navMain__element__image" xmlns="http://www.w3.org/2000/svg" width="128.33" height="113" viewBox="0 0 128.33 113"><title>emission</title><rect class="c-navMain__element__svg" x="2.5" y="2.5" width="123.33" height="89" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/><line class="c-navMain__element__svg" x1="115.17" y1="15.83" x2="115.17" y2="48.17" fill="#df1900" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/><line class="c-navMain__element__svg" x1="29.75" y1="79.5" x2="18.25" y2="79.5" fill="#df1900" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/><line class="c-navMain__element__svg" x1="84.83" y1="101.5" x2="44.25" y2="101.5" fill="#df1900" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/><line class="c-navMain__element__svg" x1="107.17" y1="111.5" x2="22.25" y2="111.5" fill="#df1900" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/></svg>`,
          path: `/`
        },
        {
          text: `Les candidats`,
          image: `<svg class="c-navMain__element__image" xmlns="http://www.w3.org/2000/svg" width="129.82" height="129.82" viewBox="0 0 129.82 129.82"><title>candidats</title><circle class="c-navMain__element__svg" cx="64.91" cy="64.91" r="62.91" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4"/><circle class="c-navMain__element__svg" cx="65.1" cy="50.23" r="23.94" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4"/><path class="c-navMain__element__svg" d="M107.07,115.84c.3-22.77-16.48-39.32-39.25-39.62S27.27,93,27,115.74" transform="translate(-2.17 -2.37)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4"/><polyline class="c-navMain__element__svg" points="54.66 105.63 60.49 111.63 77.16 95.8" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/></svg>`,
          path: `/candidats`
        },
        {
          text: `Les coulisses`,
          image: `<svg class="c-navMain__element__image" xmlns="http://www.w3.org/2000/svg" width="108.76" height="104.25" viewBox="0 0 108.76 104.25"><title>coulisses</title><line class="c-navMain__element__svg" x1="2" y1="3.83" x2="100.42" y2="102.25" fill="#d41700" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><path class="c-navMain__element__svg" d="M40.29,43.24A21.5,21.5,0,0,0,71.36,72.86" transform="translate(-1.33 -1)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><path class="c-navMain__element__svg" d="M27.17,22h1a6.72,6.72,0,0,0,6-3.76L39.82,6.76a6.72,6.72,0,0,1,6-3.76H64.32a6.72,6.72,0,0,1,6,3.76L76.5,19.27a6.69,6.69,0,0,0,6,3.75l20.39.12a4.54,4.54,0,0,1,4.51,4.48l.7,60.75a6.73,6.73,0,0,1-6.72,6.8h-.87" transform="translate(-1.33 -1)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><path class="c-navMain__element__svg" d="M19.17,22.33H10.88A6.75,6.75,0,0,0,4.09,29L3.43,87a8.16,8.16,0,0,0,8.2,8.21H92.5" transform="translate(-1.33 -1)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/></svg>`,
          path: `/coulisses`
        },
        {
          text: `Les partenaires`,
          image: `<svg class="c-navMain__element__image" xmlns="http://www.w3.org/2000/svg" width="105.38" height="94.96" viewBox="0 0 105.38 94.96"><title>partenaires</title><path class="c-navMain__element__svg" d="M53.5,17.92s5-14.75,26.25-14.75,24.5,20.75,24.25,27,3.5,37.25-50.5,63.5" transform="translate(-0.63 -0.7)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><path class="c-navMain__element__svg" d="M3.76,42.72c2.85,13,13,33.27,49.39,51" transform="translate(-0.63 -0.7)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><path class="c-navMain__element__svg" d="M53.5,17.92S48.15,2.7,26.9,2.7,2.4,23.45,2.65,29.7c0,.79,0,1.95,0,3.45" transform="translate(-0.63 -0.7)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/></svg>`,
          path: `/partenaires`
        }
      ]
    }
  }
}
</script>
