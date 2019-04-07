<template>
  <div>
    <my-header title="宇宙星语">
      <div v-if="name" slot="right" class="my-btn" @click="fetch">{{isAll ? '我的' : '全部'}}</div>
    </my-header>
    <mu-container>
      <template v-if="list.length > 0">
        <mu-card v-for="(item, index) in list" :key="index" class="card-container">
          <mu-card-header :title="item.wbID" :sub-title="`${item.addressProvince}, ${item.addressCity}`">
            <mu-avatar slot="avatar">
              <img src="../assets/images/baiyu.jpg">
            </mu-avatar>
          </mu-card-header>
          <mu-card-text>
            {{item.words}}
          </mu-card-text>
        </mu-card>
      </template>
      <div v-else class="flex flex-center empty">
        暂无数据
      </div>
    </mu-container>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import { getUserWords, getAllWords } from '../api/api.js'
export default {
  name: 'List',
  components: { MyHeader: Header },
  data () {
    return {
      name: localStorage.getItem('name'),
      list: [],
      isAll: true
    }
  },
  methods: {
    fetch () {
      if (this.isAll) {
        this.fetchUserList()
      } else {
        this.fetchAll()
      }
    },
    fetchAll () {
      getAllWords()
        .then(data => {
          this.isAll = true
          this.list = data.data
        })
        .catch(error => {
          console.log(error)
          this.list = []
        })
    },
    fetchUserList () {
      getUserWords(this.name)
        .then(data => {
          this.isAll = false
          this.list = data.data
        })
        .catch(error => {
          console.log(error)
          this.list = []
        })
    }
  },
  mounted () {
    this.fetchAll()
  }
}
</script>

<style scoped lang='scss'>
.card-container {
  margin-bottom: 15px;
  background: #c3d7df;
}
.empty {
  height: 300px;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 5px;
  color: rgb(174, 210, 211);
}
.my-btn {
  padding-right: 12px;
}
</style>
