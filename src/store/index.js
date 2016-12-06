import Vue from 'vue'
import Vuex from 'vuex'
import { fetchPlayingList, fetchHome, fetchDetail, fetchCinemas, fetchCinema } from 'services/fetchService'
// register Vuex into Vue system
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showSidebar: false,
    // global loading
    loading: false,
    // for header
    headerTitle: '',
    defaultHeaderTitle: '卖座电影',
    // for sidebar
    sidebarItems: [{
      name: '首页',
      route: '/billboard',
      corrHeaderTitle: ''
    }, {
      name: '影片',
      route: '/playing/now-playing',
      corrHeaderTitle: ''
    }, {
      name: '影院',
      route: '/cinema',
      corrHeaderTitle: '全部影院'
    }],
    // billboard data
    billboardItems: {
      homeItems: [],
      playingItems: [],
      comingItems: []
    },
    // playing-list data
    playingItems: [],
    // film detail data
    currentFilm: null,
    // cinemas
    cinemas: [],
    currentCinema: {}
  },
  mutations: {
    toggleSidebar (state) {
      state.showSidebar = !state.showSidebar
    },
    setHeaderTitle (state, title) {
      state.headerTitle = title || ''
    },
    showLoading (state) {
      state.loading = true
    },
    hideLoading (state) {
      state.loading = false
    },
    billboardLoaded (state, data) {
      state.billboardItems.homeItems = data[0].billboards
      state.billboardItems.comingItems = data[1]
      state.billboardItems.playingItems = data[2]
    },
    cleanFilmDetail (state) {
      state.currentFilm = null
    },
    filmDetailLoaded (state, data) {
      state.currentFilm = data.film
    },
    playingListLoaded (state, data) {
      state.playingItems = state.playingItems.concat(data.films)
    },
    updatePlayingCategory (state) {
      state.playingItems = []
    },
    cinemasLoaded (state, data) {
      state.cinemas = data.cinemas
    },
    cinemaLoaded (state, data) {
      state.currentCinema = data.cinema
    }
  },
  actions: {
    fetchBillboard ({commit}) {
      let promises = [fetchHome(), fetchPlayingList({category: 'coming-soon'}), fetchPlayingList()]
      Promise.all(promises).then(data => commit('billboardLoaded', data))
    },
    fetchFilmDetail ({commit}, id) {
      commit('cleanFilmDetail')
      fetchDetail(id).then(data => commit('filmDetailLoaded', data))
    },
    fetchPlaying ({commit}, query) {
      fetchPlayingList(query).then(data => commit('playingListLoaded', data))
    },
    fetchCinemas ({commit}) {
      fetchCinemas().then(data => commit('cinemasLoaded', data))
    },
    fetchCinema ({commit}, id) {
      fetchCinema(id).then(data => commit('cinemaLoaded', data))
    }
  }
})

export default store
