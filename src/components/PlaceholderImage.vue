<template>
  <div class="img-responsive holderjs" :background-src="holderBackground">
    <img :src="url" :style="{ opacity: opacity }"/>
  </div>
</template>

<script>
  import { loadImage } from 'services/fetchService'
  import Holder from 'holderjs'

  export default {
    name: 'placeholder-image',
    data () {
      return {
        width: '128',
        height: '128',
        url: null,
        opacity: 0
      }
    },
    props: ['imageUrl', 'ratio'],
    mounted () {
      const width = $(this.$el).parent().width()
      const ratio = this.ratio
      let height = width * ratio
      this.width = width
      this.height = height
      $(this.$el).height(height)
      if (this.imageUrl) {
        this.updateImage(this.imageUrl)
      }
    },
    methods: {
      updateImage (url) {
        loadImage(url).then(ret => {
          this.url = ret
          this.opacity = 1
        })
      }
    },
    watch: {
      imageUrl (url) {
        if (!url) {
          return void 666
        }
        this.updateImage(url)
      },
      holderBackground (newVal, oldVal) {
        if (newVal !== oldVal) {
          Holder.run({
            images: this.$el
          })
        }
      }
    },
    computed: {
      holderBackground () {
        return '?holderjs/' + this.width + 'x' + this.height
      }
    }
  }
</script>

<style lang="scss">
  .img-responsive {
    width: 100%;
    height: auto;
  }

  .img-responsive img {
    width: 100%;
    transition: all 1.2s ease 1s;
  }
</style>
