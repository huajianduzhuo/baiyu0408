<template>
  <div>
    <mu-appbar style="width: 100%; letter-spacing: -0.2px;" title="BaiYu 0408 Happy Birthday" :z-depth="0">
      <mu-avatar slot="left">
        <img src="../assets/images/baiyu.jpg" class="animateRotate">
      </mu-avatar>
      <icon name="list" slot="right" class="list-icon" @click="goList"></icon>
    </mu-appbar>
    <div class="action">
      <div class="action-item play"></div>
      <div class="action-item add" @click="$router.push('/saytoby')"></div>
    </div>
  </div>
</template>

<script>
import Icon from '../components/Icon.vue'
import { getCityDataCount } from '../api/api.js'
export default {
  name: 'Index',
  components: { Icon },
  data () {
    return {
      countData: []
    }
  },
  methods: {
    fetchCountData () {
      getCityDataCount()
        .then(data => {
          this.countData = data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    goList () {
      console.log(123)
      this.$router.push('/list')
    }
  },
  mounted () {
    this.fetchCountData()
  }
}
</script>

<style scoped lang='scss'>
.list-icon {
  cursor: pointer;
}
.action {
  position: fixed;
  bottom: 70px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  .action-item {
    box-sizing: border-box;
    width: 60px;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 0 5px #ececec;
    background-color: #efefef;
    margin: 0 30px;
    background-repeat: no-repeat;
    background-size: 32px 32px;
    background-position: center center;
    background-origin: center;
  }
  .play {
    background-image: url('../assets/images/play.svg');
    background-position: 18px center;
  }
  .add {
    background-image: url('../assets/images/plus.svg');
  }
}
</style>
