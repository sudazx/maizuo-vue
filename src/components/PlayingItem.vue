<template>
  <div class="playing-item" @click="viewDetail">
    <div class="playing-item-snapshot">
      <PlaceholderImage :imageUrl="data.poster.thumbnail" :ratio="ratio"></PlaceholderImage>
    </div>
    <div class="playing-item-detail">
      <!--describe and stats-->
      <p class="playing-name"> {{ data.name }}</p>
      <p class="playing-intro"> {{ data.intro }}</p>
      <p class="playing-premiere" v-if="data.isComingSoon"> {{ premiere}} </p>
      <p class="playing-stats" v-else>
        <span class="outstanding"> {{ data.cinemaCount }}</span>
        <span>家影院上映    </span>
        <span class="outstanding"> {{ data.watchCount }}</span>
        <span>人购票</span>
      </p>
      <!--score-->
      <div class="playing-grade-wrapper">
        <span v-if="!data.isComingSoon" class="playing-grade"> {{ data.grade }}</span>
        <span>&gt;</span>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import {transformWeekend} from 'services/transformService'
  export default {
    name: 'playing-item',
    data () {
      return {
        ratio: 206 / 150
      }
    },
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    computed: {
      premiere () {
        const time = moment(this.data.premiereAt)
        return time.format('MM') + '月' + time.format('DD') + '号上映  ' + transformWeekend(time.weekday())
      }
    },
    methods: {
      viewDetail () {
        this.$router.push(`/film/${this.data.id}`)
      }
    }
  }
</script>

<style lang="scss">
  .playing-item {
    border-bottom: 1px dashed #ccc;
    padding: 20px 0;
    cursor: pointer;
  }

  .playing-item-snapshot {
    display: inline-block;
    width: 60px;
    vertical-align: middle;
  }

  .playing-item-snapshot > img {
    width: 100%;
  }

  .playing-item-detail {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    width: 75%;
    overflow: hidden;
    position: relative;
  }

  .playing-item-detail .playing-name {
    font-size: 16px;
    color: #000;
    line-height: 32px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 0;
  }

  .playing-item-detail .playing-intro {
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #8e8e8e;
    margin: 0;
  }

  .playing-item-detail .playing-premiere{
    line-height: 24px;
    font-size: 12px;
    color: #ffb375;
    margin: 0;
  }

  .playing-item-detail .playing-stats {
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #8e8e8e;
    margin: 0;
  }

  .playing-item-detail .playing-stats .outstanding {
    color: #8aa2bf;
  }

  .playing-grade-wrapper {
    position: absolute;
    right: 4px;
    top: 40%;
    color: #dadada;
    font-size: 16px;
  }

  .playing-grade-wrapper .playing-grade {
    color: #fe6e00;
  }

</style>
