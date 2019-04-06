<template>
  <mu-container>
    <mu-card v-for="(item, index) in list" :key="index">
      <mu-card-text>
        {{item.words}}
      </mu-card-text>
    </mu-card>
  </mu-container>
</template>

<script>
import { getUserWords } from '../api/api.js'
export default {
  name: 'List',
  data () {
    return {
      name: localStorage.getItem('name'),
      list: []
    }
  },
  mounted () {
    if (!this.name) {
      this.$router.replace('/')
    } else {
      getUserWords(this.name)
        .then(data => {
          this.list = data.data
        })
        .catch(error => {
          console.log(error)
          this.list = [{
            words: '暂无数据'
          }]
        })
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
