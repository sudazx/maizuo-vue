<template>
  <div class="sidebar">
    <nav>
      <ul class="sidebar-nav-container">
        <li v-for="category in categories" class="sidebar-nav" @click="goto(category)">
          <span> {{category.name}} </span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    computed: {
      categories: function () {
        return this.$store.state.sidebarItems
      }
    },
    methods: {
      goto (category) {
        this.$router.push(category.route)
        this.$store.commit('setHeaderTitle', category.corrHeaderTitle)
        this.$store.commit('toggleSidebar')
      }
    }
  }
</script>

<style lang="scss">
  .sidebar {
    position: fixed;
    z-index: 501;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .sidebar-nav-container {
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 110px;
    border-top: 1px solid #222;
    box-shadow: 0px 1px 2px #363636;
    background-color: #282828;
  }

  .sidebar-nav {
    font-size: 14px;
    color: #9a9a9a;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #222;
    box-shadow: 0px 1px 1px #363636;
    padding-left: 20px;
    position: relative;
    cursor: pointer;
  }

  .sidebar-nav::after {
    content: '>';
    float: right;
    margin-right: 16px;
  }

</style>
