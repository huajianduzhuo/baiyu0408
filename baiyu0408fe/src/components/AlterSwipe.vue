<template>
  <div class="alter-swiper">
    <icon name="cancel-circle" class="close-icon" @click="$emit('close')"></icon>
    <swipe-item :item="list[index]" :show="currentIndex === index"></swipe-item>
    <swipe-item v-if="list.length > 1" :item="list[nextIndex]" :show="currentIndex === nextIndex"></swipe-item>
  </div>
</template>

<script>
import Icon from './Icon.vue'
import SwipeItem from './SwipeItem.vue'
export default {
  name: 'AlterSwiper',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  components: { SwipeItem, Icon },
  data () {
    return {
      index: 0,
      nextIndex: 1,
      currentIndex: 0,
      r: null
    }
  },
  mounted () {
    if (this.list.length > 1) {
      this.r = setInterval(() => {
        if (this.currentIndex === this.index) {
          this.currentIndex = this.nextIndex
          this.index = this.nextIndex + 1
          if (this.index === this.list.length) {
            this.index = 0
          }
        } else {
          this.currentIndex = this.index
          this.nextIndex = this.index + 1
          if (this.nextIndex === this.list.length) {
            this.nextIndex = 0
          }
        }
      }, 5000)
    }
  },
  beforeDestroy () {
    if (this.r) {
      clearInterval(this.r)
    }
  }
}
</script>

<style scoped lang='scss'>
.alter-swiper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/images/universe.png');
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
  opacity: .85;
  z-index: 500;
  .close-icon {
    position: absolute;
    top: 40px;
    right: 20px;
    background-size: 30px 30px;
    height: 30px;
    cursor: pointer;
  }
}
</style>
