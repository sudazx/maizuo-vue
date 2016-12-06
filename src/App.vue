<template>
  <div>
    <AppHeader></AppHeader>
    <transition name="fade">
      <AppSidebar v-if="showSidebar"></AppSidebar>
    </transition>
    <div class="app-content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AppHeader from './views/AppHeader'
  import AppSidebar from './views/AppSidebar'

  export default {
    components: {
      AppHeader,
      AppSidebar
    },
    computed: {
      showSidebar () {
        return this.$store.state.showSidebar
      }

    }
  }

</script>

<style>
  @import "../node_modules/normalize.css";

  body {
    background-color: #f9f9f9;
    font-size: 12px;
    line-height: 1.5;
    font-family: 'Microsoft YaHei', Tahoma, Helvetica, Arial, sans-serif;
    color: #333;
  }

  a{
    cursor: pointer;
  }

  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .app-content-wrapper {
    margin-top: 50px;
  }

  * {
    box-sizing: border-box;
  }

  .pull-left {
    float: left;
  }

  .pull-right{
    float: right;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  ::selection {
    background:none;
  }
</style>
