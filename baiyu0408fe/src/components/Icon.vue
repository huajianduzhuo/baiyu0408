<template>
  <span class="icon" :style="`background-image: url('${image}')`" @click="$emit('click')"></span>
</template>
<script>
export default {
  name: 'Icon',
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
<style lang="scss">
.icon {
  display: inline-block;
  background-size: 18px 18px;
  background-position: center center;
  background-repeat: no-repeat;
  width: 40px;
  min-width: 20px;
  height: 100%;
}
</style>
