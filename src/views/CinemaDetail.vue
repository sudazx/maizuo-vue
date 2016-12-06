<template>
  <div class="cinema-detail">
    <div class="cinema-detail-describe">
      <PlaceholderImage :imageUrl="imageUrl" :ratio="ratio"></PlaceholderImage>
      <div class="cinema-detail-book" v-if="cinema.isBookable">
        <div class="cinema-detail-book-info">
          <p>订座票</p>
          <p style="color: #737373;font-size: 12px">选好场次及座位，到影院自助机取票</p>
        </div>
        <div class="cinema-detail-book-btn">
          立即订座
        </div>
      </div>
      <div class="cinema-detail-address">
        <p class="cinema-detail-address-info">{{cinema.address}}</p>
      </div>
      <div class="cinema-detail-tel">
        <p class="cinema-detail-tel-info">{{telephones}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cinema-detail',
    data () {
      return {
        ratio: 306 / 640,
        imageUrl: '/static/cinema.png'
      }
    },
    created () {
      let id = this.$store.state.route.params.cinemaID
      this.$store.dispatch('fetchCinema', id)
    },
    computed: {
      cinema () {
        return this.$store.state.currentCinema || {}
      },
      telephones () {
        return (this.cinema.telephones || []).join(' , ')
      }
    },
    watch: {
      cinema (newValue) {
        if (newValue.name) {
          this.$store.commit('setHeaderTitle', newValue.name)
        }
      }
    }
  }
</script>

<style lang="scss">
  .cinema-detail {
    max-width: 640px;
    margin: 0 auto;
    padding-top: 20px;
    box-shadow: 0px 1px 0.5px #ccc;
    font-size: 14px;
    color: #000;
  }

  .cinema-detail-book {
    overflow: hidden;
    background-color: #fff;
    height: 90px;
    position: relative;
    border-bottom: 1px dotted #d6d6d6;
  }

  .cinema-detail-book-info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 16px;
  }

  .cinema-detail-book-btn {
    position: absolute;
    right: 10px;
    top: 30%;
    background-color: #fe8223;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
  }

  .cinema-detail-book::before {
    content: '\2661';
    color: #fe8233;
    font-size: 26px;
    line-height: 60px;
    margin-left: 10px;
    display: inline-block;
  }

  .cinema-detail-address{
    overflow: hidden;
    background-color: #fff;
    height: 60px;
    position: relative;
    border-bottom: 1px dotted #d6d6d6;
  }

  .cinema-detail-address::before {
    content: '\2642';
    color: #7bafe1;
    font-size: 26px;
    line-height: 60px;
    margin-left: 10px;
    display: inline-block;
  }
  .cinema-detail-address-info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 16px;
  }

  .cinema-detail-tel{
    overflow: hidden;
    background-color: #fff;
    height: 60px;
    position: relative;
  }

  .cinema-detail-tel::before {
    content: '\260E';
    color: #df8f9f;
    font-size: 26px;
    line-height: 60px;
    margin-left: 10px;
    display: inline-block;
  }
  .cinema-detail-tel-info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 16px;
  }

</style>
