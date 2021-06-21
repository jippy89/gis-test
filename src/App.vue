<template>
  <div id="app">
    <Map
      :zoom="mapConfig.zoom"
      :center="mapConfig.center"
      class="app__map"
    >
      <TileLayer
        :url="mapConfig.url"
        :attribution="mapConfig.attribution"
      />

    </Map>
  </div>
</template>

<script>
import { latLng } from "leaflet";

export default {
  name: 'App',
  components: {
    Map: require('./components/atoms/LeafletMap').default,
    TileLayer: require('./components/atoms/LeafletTileLayer').default
  },
  data () {
    return {
      mapConfig: {
        zoom: 10,
        center: latLng( -6.200000, 106.816666)
      }
    }
  }
};
</script>

<style lang="stylus">
body
  margin 0
</style>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

  height 100vh
</style>
