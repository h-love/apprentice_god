<template>
  <div class="theHomePage o-section__100vh">
    <img class="c-logo" src="/static/images/ag_logo.jpg" alt="logo" />
    <router-link to="/emission/debut" class="c-btn">
      Lancer l'émission
    </router-link>
    <nav-main />
  </div>
</template>
<script>
import NavMain from '@/components/modules/navMain'
export default {
  components: {
    NavMain
  }
}
</script>
