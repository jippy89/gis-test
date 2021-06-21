<template>
  <div id="app">
    <Map
      :zoom="mapConfig.zoom"
      :center="mapConfig.center"
      @click="onMapClick"
      class="app__map"
    >
      <TileLayer
        :url="mapConfig.url"
        :attribution="mapConfig.attribution"
      />

      <LMarker v-for="(mark, i) in markers"
        :key="i"
        :lat-lng.sync="mark.position"
      >
      </LMarker>

      <Routing v-if="is2Markers" :waypoints="waypoints" />

    </Map>
  </div>
</template>

<script>
import { latLng } from "leaflet";

export default {
  name: 'App',
  components: {
    Map: require('./components/atoms/LeafletMap').default,
    TileLayer: require('./components/atoms/LeafletTileLayer').default,
    LMarker: require('./components/atoms/LeafletMarker').default,
    Routing: require('./components/atoms/LeafletRoutingMachine').default
  },
  data () {
    return {
      mapConfig: {
        zoom: 10,
        center: latLng( -6.200000, 106.816666)
      },
      markers: []
    }
  },
  computed: {
    is2Markers () {
      return this.markers.length === 2
    },
    waypoints () {
      if (is2Markers) {
        return [
          this.markers[0].position,
          this.markers[1].position
        ]
      }
      return []
    }
  },
  methods: {
    onMapClick (e) {
      this.addMarker(e.latlng)
    },
    addMarker(position) {
      if (this.markers.length > 1) {
        this.markers = []
      }

      this.markers.push({
        position
      })

      console.log(this.markers)
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
