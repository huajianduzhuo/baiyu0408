<template>
  <mu-appbar style="width: 100%" title="" :z-depth="0">
    <icon name="arrow_lift" class="back-icon" slot="left" @click="$router.back()"></icon>
    <div>{{title}}</div>
    <slot name="right" slot="right"></slot>
  </mu-appbar>
</template>

<script>
import Icon from './Icon.vue'
export default {
  name: 'Header',
  components: { Icon },
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.back-icon {
  width: 40px;
}
</style>
