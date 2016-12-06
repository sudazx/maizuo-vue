<template>
  <div class="film-detail">
    <!--film image-->
    <div class="film-image">
      <PlaceholderImage :imageUrl="film.cover.origin"></PlaceholderImage>
    </div>
    <div class="film-intro">
      <div class="film-intro-profile">影片简介</div>

      <div class="film-intro-snippet">
        <span class="film-intro-key">导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演</span>
        <span class="film-intro-sp">:</span>
        <span class="film-intro-content"> {{film.director}} </span>
      </div>

      <div class="film-intro-snippet">
        <span class="film-intro-key">主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演</span>
        <span class="film-intro-sp">:</span>
        <span class="film-intro-content"> {{actors}} </span>
      </div>

      <div class="film-intro-snippet">
        <span class="film-intro-key">地区语言</span>
        <span class="film-intro-sp">:</span>
        <span class="film-intro-content"> {{film.language}} </span>
      </div>

      <div class="film-intro-snippet">
        <span class="film-intro-key">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型</span>
        <span class="film-intro-sp">:</span>
        <span class="film-intro-content"> {{film.category}} </span>
      </div>

      <div class="film-intro-snippet">
        <span class="film-intro-key">上映日期</span>
        <span class="film-intro-sp">:</span>
        <span class="film-intro-content"> {{premiere}}上映 </span>
      </div>

      <div class="film-intro-snippet">
        <span> {{film.synopsis}} </span>
      </div>

    </div>
    <!--buy immediately-->
    <a class="book-btn">立即购票</a>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    mounted () {
      const filmID = this.$route.params.filmID
      this.$store.dispatch('fetchFilmDetail', filmID)
    },
    data () {
      return {
        ratio: 328 / 640
      }
    },
    computed: {
      film: function () {
        // 需要修改成数据加载好了才跳
        return this.$store.state.currentFilm || {cover: {}, actors: []}
      },
      actors: function () {
        const list = this.film ? this.film.actors.map(item => item.name) : []
        return list.join(' | ')
      },
      premiere: function () {
        if (this.film) {
          const time = moment(this.film.premiereAt)
          return time.format('MM') + '月' + time.format('DD') + '号'
        }
        return '加载中...'
      }
    },
    watch: {
      film (data) {
        if (data && data.name) {
          this.$store.commit('setHeaderTitle', data.name)
        }
      }
    }
  }
</script>

<style lang="scss">
  .film-detail {
    padding-top: 10px;
    width: 600px;
    margin: auto;
  }

  .film-detail .film-image{
    background-size: 100%;
    width: 100%;
    height: auto;
    vertical-align: middle;
  }
  .film-detail .film-image img{
    width: 100%;
    transition: all 1s ease;
  }

  .film-intro {
    margin-bottom: 100px;
  }

  .film-intro .film-intro-profile{
    border-left: 16px solid rgb(228,220,156);
    margin: 16px 0;
    font-size: 16px;
    padding-left: 4px;
  }

  .film-intro-snippet {
    padding-left: 20px;
  }

  .film-intro-snippet > span{
    display: inline-block;
    font-size: 12px;
    margin-bottom: 12px;
    height: 18px;
  }

  .film-intro-snippet > span.film-intro-key {
    width: 48px;
  }

  .book-btn {
    background-color: #fe8233;
    font-size: 14px;
    min-width: 156px;
    height: 36px;
    line-height: 36px;
    border-radius: 18px;
    color: #fff;
    transition: 0.5s ease;
    outline: none;
    position: fixed;
    bottom: 16px;
    left: 46%;
    text-align: center;
  }

  .book-btn:hover{
    background-color: #e47630;
  }
</style>
