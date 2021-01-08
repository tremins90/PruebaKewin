<template>
  <gmap-map
      :center="center"
      :zoom="16"
      style="width: 100%; height: 400px"
  >
    <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :title="m.title"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>
<script>
export default {
  name: 'GoogleMaps',
  data () {
    return {
      center: {lat: this.latitude, lng: this.longitude},
      markers: [{
        position: {lat: this.latitude, lng: this.longitude},
        title: this.title
      }]
    }
  },

  props: {
    latitude: null,
    longitude: null,
    title: String
  }
}
</script>
