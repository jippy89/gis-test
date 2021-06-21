<template>
  <div id="app">
    <Map class="app__map"></Map>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Map: require('./components/atoms/LeafletMap').default,
  },
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

.app
  &__map
    height 100vh
</style>
