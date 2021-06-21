<template>
  <div ref="map" class="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import L from 'leaflet';

export default {
  data () {
    return {
      map: null,
      markerIcon: null
    }
  },
  methods: {
    createMap () {
      this.map = L.map(this.$refs.map, {
        center: [51.505, -0.09],
        zoom: 13
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    },
    createMarkerIcon () {
      this.markerIcon = L.icon({
          iconUrl: markerIconPng,
      })
    }
  },
  mounted () {
    this.createMap()
    this.createMarkerIcon()

    L.marker([51.5, -0.09], {
      icon: this.markerIcon
    }).addTo(this.map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }
};
</script>

<style lang="stylus" scoped>
.map
  width 100vw
  height 100vh
</style>