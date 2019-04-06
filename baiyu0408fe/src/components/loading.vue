<template>
  <div class="loading-container">
    <img src="../assets/images/spinner.svg" alt="loading">
  </div>
</template>
<style scoped lang='scss'>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    animation: spinner 1.2s linear 0s infinite;
  }
}
@keyframes spinner {
  0% {
    transform: rotateZ(0deg);
  }
  20% {
    transform: rotateZ(90deg);
  }
  50% {
    transform: rotateZ(200deg);
  }
  80% {
    transform: rotateZ(270deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
