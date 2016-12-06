<template>
  <div class="playing-wrapper">
    <!--Header-->
    <ul class="playing-header">
      <li v-for="category in playingCategories"
          class="playing-category"
          :class="{ active: category.active }"
          @click="categoryRoute(category)">
        <span>{{ category.name }}</span>
      </li>
    </ul>
    <!--Playing List-->
    <div class="playing-list">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'playing-wrapper',
    data () {
      return {
        playingCategories: [{
          name: '正在热映',
          route: 'now-playing',
          active: false
        }, {
          name: '即将上映',
          route: 'coming-soon',
          active: false
        }]
      }
    },
    created () {
      let route = this.$route.params.playingCategory
      this.reactToRoute(route)
    },
    beforeUpdate () {
      // trigger this hook whenever 'playing' route changed
      let route = this.$route.params.playingCategory
      this.reactToRoute(route)
    },
    methods: {
      categoryRoute (category) {
        this.$store.commit('updatePlayingCategory')
        this.$router.replace(`/playing/${category.route}`)
      },
      reactToRoute (route) {
        this.playingCategories.forEach(category => { category.active = category.route === route })
        // fetch data
        this.$store.dispatch('fetchPlaying', {
          category: route,
          page: 1,
          count: 7
        })
      }
    }
  }
</script>

<style lang="scss">

  .playing-wrapper {
    width: 100%;
    height: auto;
    padding: 0 10px;
  }

  .playing-header {
    overflow: hidden;
    width: 100%;
    font-size: 16px;
    color: #6a6a6a;
  }

  .playing-category {
    float: left;
    width: 50%;
    height: 46px;
    border-bottom: 1px solid #fe6e00;
    text-align: center;
    line-height: 46px;
    cursor: pointer;
  }

  .playing-category.active {
    border-bottom: 4px solid #fe6e00;
    color: #fe6e00;
  }
</style>

