import Vue from 'vue'
import Router from 'vue-router'
import theHomePage from '@/components/views/theHomePage'
import theMoviePage from '@/components/views/theMoviePage'
import theChoicePage from '@/components/views/theChoicePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'theHomePage',
      component: theHomePage
    },
    {
      path: '/emission/:id',
      name: 'theMoviePage',
      component: theMoviePage
    },
    {
      path: '/emission/choix/:id',
      name: 'theChoicePage',
      component: theChoicePage
    }
  ]
})
