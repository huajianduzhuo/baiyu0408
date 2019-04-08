<template>
  <div class="map-container">
  </div>
</template>
<script>
import geoCoordMap from '../data/geoCoordMap.js'
import echarts from 'echarts'
export default {
  name: 'Map',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.map-container {
  width: 100%;
  height: 400px;
}
</style>
