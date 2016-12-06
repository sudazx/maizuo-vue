<template>
  <div class="cover" @click="onclick">
    <div class="cover-img">
      <PlaceholderImage :imageUrl="data.cover.origin" :ratio="ratio"></PlaceholderImage>
    </div>
    <div class="cover-desc">
      <div class="cover-desc-detail">
        <div class="film-name"> {{data.name}} </div>
        <div class="stats">
          <span> {{data.cinemaCount}} </span>
          <span>家影院上映</span>
          <span> {{data.watchCount}} </span>
          <span>人购票</span>
        </div>
      </div>
      <div class="pull-right">
        <span class="score"> {{data.grade}} </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        ratio: 328 / 640
      }
    },
    computed: {
      background: function () {
        let url = this.data.cover.origin ||
          'http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png'
        return `url(${url})`
      }
    },
    methods: {
      onclick () {
        this.$emit('click', this.data)
      }
    }
  }

</script>

<style lang="scss">
  .cover{
    width: 100%;
    margin-bottom: 16px;
    box-shadow: 0.5px 0.5px 1px #a8a8a8;
    cursor: pointer;
  }

  .cover-img{
    display: block;
    background-size:100%;
    overflow: hidden;
    background-image: url('http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png');
  }

  .cover-img img{
    width: 100%;
    border: 0;
    height: auto;
    transition: all 1.2s ease 0s;
    /* why add this can work*/
    vertical-align: middle;
  }

  .cover-desc{
    background-color: #fff;
  }

  .cover-desc .cover-desc-detail{
    display: inline-block;
    height: 50px;
    padding-top: 13px;
    padding-left: 18px;
  }

  .cover-desc .cover-desc-detail .film-name{
    font-size: 12px;
    line-height: 15px;
  }

  .cover-desc .cover-desc-detail .stats{
    font-size: 8px;
    color: #9a9a9a;
    line-height: 15px;
  }

  .cover-desc .score{
    color: #f78360;
    display: inline-block;
    line-height: 50px;
    font-size: 18px;
    margin-right: 15px;
  }

</style>
