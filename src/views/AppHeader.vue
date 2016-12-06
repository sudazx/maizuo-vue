<template>
  <div class="header">
    <div class="header-nav">
      <a @click="toggleSidebar">
        <div class="header-nav-title-icon">
        </div>
        <div class="header-nav-title"> {{title}} </div>
      </a>
    </div>
    <div class="header-nav-right">
      <!-- to be continue-->
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      toggleSidebar () {
        this.$store.commit('toggleSidebar')
      }
    },
    computed: {
      title: function () {
        return this.$store.state.headerTitle || this.$store.state.defaultHeaderTitle
      }
    }
  }
</script>

<style lang="scss">

  .header {
    height: 50px;
    line-height: 50px;
    width: auto;
    background-color: #282828;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 500;
  }

  .header-nav {

    color: #efefef;
    display: inline-block;
    font-size: 14px;

    .header-nav-title-icon{
      display: inline-block;
      color:  #999;
      width: 50px;
      text-align: center;
      border-right: 1px solid #222;
      box-shadow: 1px 0 1px #363636;
      &::before {
         content: '\261E';
       }
    }

    .header-nav-title{
      display: inline-block;
      margin-left: 10px;
    }
  }

  .header-nav-right{
    float: right;
  }

</style>
