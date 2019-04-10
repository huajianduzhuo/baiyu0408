<template>
  <div class="swipe-item scale-animation" ref="swiper" v-show="show">
    <div class="swipe-item-title">
      {{item.wbID}}
    </div>
    <div class="swipe-item-sub-title">
      {{item.addressProvince + '  ' + item.addressCity}}
    </div>
    <div class="swipe-item-content">
      {{item.words}}
    </div>
  </div>
</template>

<script>
let docWidth = document.documentElement.clientWidth
let docHeight = document.documentElement.clientHeight
export default {
  name: 'SwipeItem',
  props: ['item', 'show'],
  watch: {
    show (val) {
      if (!val) {
        let x = parseInt(Math.random() * docWidth)
        let y = parseInt(Math.random() * docHeight - docHeight / 2)
        this.$refs.swiper.style.transformOrigin = `${x}px ${y}px`
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.swipe-item {
  position: absolute;
  top: 50%;
  left: -3%;
  border-radius: 50%;
  transform: translateY(-50%);
  width: 106%;
  height: 280px;
  padding: 35px 60px;
  color: #2D2B46;
  background-color: #F5F5F5;
  background-image: url('../assets/images/chatu.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 110%;
  .swipe-item-title {
    font-size: 22px;
  }
  .swipe-item-sub-title {
    font-size: 14px;
  }
  .swipe-item-content {
    font-size: 18px;
    max-height: 160px;
    overflow: auto;
  }
}
.scale-animation {
  animation: scale 5s linear 0s infinite;
}
@keyframes scale {
  0% {
    transform: scale(0) translateY(-50%);
  }
  15% {
    transform: scale(1) translateY(-50%);
  }
  85% {
    transform: scale(1) translateY(-50%);
  }
  100% {
    transform: scale(0) translateY(-50%);
  }
}
</style>
