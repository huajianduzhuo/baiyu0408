<template>
  <div id="app">
    <router-view/>
    <loading v-if="loading"></loading>
  </div>
</template>
<script>
import Loading from './components/loading.vue'
export default {
  name: 'App',
  components: { Loading },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  max-width: 750px;
  margin: 0 auto;
}
.text-center {
  text-align: center;
}
</style>
