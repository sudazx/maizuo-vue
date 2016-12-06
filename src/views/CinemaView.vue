<template>
  <div class="cinemas">
    <div class="restrict"
         v-for="(list, name) in restrictCinemas"
         :class="{active: isActive(name)}"
         @click="toggleRestrict(name)">
      <div class="title"> {{name}} </div>
      <div class="content">
        <Cinema v-for="cinema in list" :data="cinema" @click="viewDetail(cinema)"></Cinema>
      </div>
    </div>
  </div>
</template>

<script>
  import Cinema from 'components/Cinema'
  import {createMapping} from 'services/utilService'

  export default {
    created () {
      this.$store.dispatch('fetchCinemas')
    },
    data () {
      return {
        activeItems: []
      }
    },
    computed: {
      cinemas () {
        return this.$store.state.cinemas || []
      },
      restrictCinemas () {
        const cinemaMap = {}
        this.cinemas.forEach(cinema => {
          (cinemaMap[cinema.district.name] = cinemaMap[cinema.district.name] || []).push(cinema)
        })
        this.attachActive(cinemaMap)
        return cinemaMap
      }
    },
    methods: {
      toggleRestrict (name) {
        this.activeItems[name] = !this.activeItems[name]
      },
      attachActive (map) {
        let keys = Object.keys(map)
        let items = createMapping(keys, false)
        // expand the first one
        if (keys.length) {
          items[keys[0]] = true
        }
        this.activeItems = items
      },
      isActive (name) {
        return this.activeItems[name]
      },
      viewDetail (cinema) {
        this.$router.push(`/cinema/${cinema.id}`)
      }
    },
    components: {
      Cinema
    }
  }
</script>

<style>
  .cinemas{
    width: 100%;
    height: auto;
  }

  .restrict {
    width: 100%;
    cursor: pointer;
    margin-bottom: 1px;
  }

  .restrict .title {
    background-color: #E1E1E1;
    color: #636363;
    font-size: 14px;
    line-height: 40px;
    padding-left: 20px;
  }

  .restrict .content{
    display: none;
  }

  .restrict.active .content {
    display: block;
  }

</style>
