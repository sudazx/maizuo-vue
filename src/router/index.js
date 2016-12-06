import VueRouter from 'vue-router'
import Vue from 'vue'
// register plugin router into Vue system
Vue.use(VueRouter)
// import business components here ...
import Billboard from 'views/Billboard'
import PlayingWrapper from 'views/PlayingWrapper'
import FilmDetail from 'views/FilmDetail'
import CinemaView from 'views/CinemaView'
import CinemaDetail from 'views/CinemaDetail'

import PlayingList from 'components/PlayingList'

const routes = [
  {
    path: '/',
    redirect: '/billboard'
  },
  {
    path: '/billboard',
    component: Billboard
  },
  {
    path: '/playing',
    component: PlayingWrapper,
    children: [{
      path: ':playingCategory',
      component: PlayingList
    }]
  },
  {
    path: '/cinema',
    component: CinemaView
  },
  {
    path: '/cinema/:cinemaID',
    component: CinemaDetail
  },
  {
    path: '/film/:filmID',
    component: FilmDetail
  }
]

export default new VueRouter({routes, mode: 'history'})

