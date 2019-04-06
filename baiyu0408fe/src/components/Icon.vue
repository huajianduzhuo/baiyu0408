<template>
  <span class="icon" :style="`background-image: url('${image}')`"></span>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      image: require(`../assets/images/${this.name}.svg`)
    }
  }
}
</script>
<style lang="scss" scoped>
.icon {
  display: inline-block;
  background-size: 18px 18px;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  min-width: 20px;
  height: 100%;
}
</style>
