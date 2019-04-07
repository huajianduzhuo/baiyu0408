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
.flex {
  display: flex;
}
.flex-center {
  justify-content: center;
  align-items: center;
}
.animateRotate {
  animation: linearRotate 5s linear 0s infinite;
}
@keyframes linearRotate {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>
