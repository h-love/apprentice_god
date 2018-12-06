import Vue from 'vue'
import Router from 'vue-router'
import theHomePage from '@/components/views/theHomePage'
import theCandidatesPage from '@/components/views/theCandidatesPage'
import theBackstagePage from '@/components/views/theBackstagePage'
import thePartnersPage from '@/components/views/thePartnersPage'
import theMoviePage from '@/components/views/theMoviePage'
import theChoicePage from '@/components/views/theChoicePage'
import theRecapPage from '@/components/views/theRecapPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'theHomePage',
      component: theHomePage
    },
    {
      path: '/candidats',
      name: 'theCandidatesPage',
      component: theCandidatesPage
    },
    {
      path: '/coulisses',
      name: 'theBackstagePage',
      component: theBackstagePage
    },
    {
      path: '/partenaires',
      name: 'thePartnersPage',
      component: thePartnersPage
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
    },
    {
      path: '/recap',
      name: 'theRecapPage',
      component: theRecapPage
    }
  ]
})
