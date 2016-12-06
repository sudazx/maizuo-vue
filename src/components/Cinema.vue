<template>
  <div class="cinema" @click="onclick">
    <p class="cinema-name"> {{ data.name }}</p>
    <div class="cinema-labels">
      <span v-for="label in data.labels" :class="label.type.toLowerCase()"> {{ label.name }} </span>
    </div>
    <p class="cinema-address"> {{ data.address }} </p>
    <p class="cinema-distance"> {{ distance }}</p>
  </div>
</template>

<script>
  export default {
    name: 'cinema',
    props: ['data'],
    computed: {
      distance () {
        return '距离未知'
      }
    },
    methods: {
      onclick () {
        this.$emit('click')
      }
    }
  }
</script>

<style>
  .cinema {
    padding: 12px 0;
    padding-left: 20px;
    border-bottom: 1px solid #E1E1E1;
    cursor: pointer;
  }

  .cinema-name {
    color: #000;
    font-size: 16px;
  }

  .cinema-address, .cinema-distance {
    color: #ccc;
  }

  .cinema-labels{
    color: #fff;
    font-size: 10px;
  }

  .cinema-labels span{
    background-color: #51add0;
    padding: 2px 5px;
    border-radius: 3px;
    margin-right: 10px;
  }

  .cinema-labels span.discount {
    background-color: #ff9658;
  }
</style>
