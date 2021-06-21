<template>
  <TileLayer
    :url="url"
    :attribution="attribution"
    v-bind="$attrs"
    v-on="$listeners"
  >
  </TileLayer>
</template>

<script>
import { LTileLayer } from 'vue2-leaflet';

export default {
  components: {
    TileLayer: LTileLayer
  },
  props: {
    url: {
      type: String,
      default: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    },
    attribution: {
      type: String,
      default: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  }
}
</script>
