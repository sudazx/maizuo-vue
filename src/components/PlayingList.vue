<template>
  <div>
    <PlayingItem v-for="item in playingItems" :data="item"></PlayingItem>
  </div>
</template>

<script>
  import PlayingItem from 'components/PlayingItem'

  export default {
    components: {
      PlayingItem
    },
    computed: {
      playingItems () {
        return this.$store.state.playingItems
      }
    }
  }
</script>
