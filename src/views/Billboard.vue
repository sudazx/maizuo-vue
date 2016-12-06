<template>
  <div class="billboard">
    <!-- Scroll Content-->
    <div class="slider" v-slick-slider>
      <div v-for="item in items.homeItems">
        <PlaceholderImage :imageUrl="item.imageUrl" :ratio="ratio"></PlaceholderImage>
      </div>
    </div>
    <!--films-->
    <div class="billboard-playing">
      <cover v-for="item in items.playingItems.films"
             @click="viewDetail(item)"
             :data="item"></cover>
    </div>
    <div class="more-btn" @click="viewMorePlaying">更多热映电影</div>
    <!-- Splitter -->
    <div class="divider-line">
      <div class="upcoming">即将上映</div>
    </div>
    <div class="billboard-coming">
      <cover v-for="item in items.comingItems.films"
             @click="viewDetail(item)"
             :data="item"></cover>
    </div>
    <div class="more-btn" @click="viewMoreComing">更多即将上映电影</div>
  </div>
</template>

<script>
  import Cover from 'components/Cover'
  import PlaceholderImage from 'components/PlaceholderImage'
  require('slick-carousel')
  require('styles/slick.css')

  export default {
    name: 'billboard',
    created: function () {
      this.$store.dispatch('fetchBillboard')
    },
    data () {
      return {
        ratio: 328 / 640
      }
    },
    computed: {
      items: function () {
        return this.$store.state.billboardItems
      }
    },
    methods: {
      viewDetail (cover) {
        this.$router.push(`/film/${cover.id}`)
      },
      viewMorePlaying () {
        this.$router.push(`/playing/now-playing`)
      },
      viewMoreComing () {
        this.$router.push(`/playing/coming-soon`)
      }
    },
    components: {
      Cover,
      PlaceholderImage
    },
    directives: {
      slickSlider: {
        componentUpdated (el) {
          // use jquery slick slider
          $(el).slick({
            dots: false,
            infinite: true,
            arrows: false,
            speed: 500,
            fade: true,
            autoplay: true,
            autoplaySpeed: 5000,
            cssEase: 'linear'
          })
        }
      }
    }
  }
</script>

<style lang="scss">
  @media (max-width: 768px){
    .billboard {
      width: auto !important;
      margin: 0 !important;
    }
  }

  .billboard {
    width: 600px;
    margin: auto;
    padding-top: 10px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .billboard-playing, .billboard-coming {
    padding: 0 17px;
  }

  .slider img {
    width: 100%;
  }

  .more-btn {
    border-radius: 10px;
    width: 160px;
    color: #616161;
    border: 1px solid #aaa;
    text-align: center;
    padding: 5px ;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .divider-line {
    position: relative;
    margin-top: 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid #a8a8a8;
  }

  .upcoming {
    width: 65px;
    height: 20px;
    line-height: 20px;
    margin: 0 auto;
    margin-bottom: -10px;
    border-radius: 5px;
    font-size: 10px;
    text-align: center;
    color: #eee;
    background-color: #a7a7a7;
  }

</style>
