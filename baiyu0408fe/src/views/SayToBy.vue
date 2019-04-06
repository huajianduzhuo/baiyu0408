<template>
  <div>
    <mu-appbar style="width: 100%" title="" :z-depth="0">
      <icon name="arrow_lift" class="back-icon" slot="left" @click="$router.back()"></icon>
      <div>小宇宙想对白宇说</div>
    </mu-appbar>
    <mu-container class="form-wrap">
      <mu-form :model="formData" ref="form" label-position="left" label-width="100">
        <mu-form-item label="微博昵称" prop="wbID" :rules="validateWbID">
          <mu-text-field v-model="formData.wbID"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="来自哪里">
          <div @click="toggleAddressPicker">{{formData.addressCity || '选择小宇宙的母星'}}</div>
        </mu-form-item>
        <mu-form-item label="想对白宇说" prop="words" :rules="validateWords">
          <mu-text-field multi-line :rows="4" v-model="formData.words"></mu-text-field>
        </mu-form-item>
        <mu-button full-width color="primary" @click="submit">提交</mu-button>
      </mu-form>
    </mu-container>
    <mu-bottom-sheet :open.sync="addressPickerShow">
      <mu-appbar style="width: 100%" title="" :z-depth="0">
        <div slot="left" class="padding8" @click.stop="cancelSelect">取消</div>
        <div slot="right" class="padding8" @click.stop="confirmSelect">确定</div>
      </mu-appbar>
      <mu-slide-picker :slots="addressSlots" :visible-item-count="7" @change="addressChange" :values="address"></mu-slide-picker>
    </mu-bottom-sheet>
  </div>
</template>

<script>
import AddressData from '../data/address.js'
import Icon from '../components/Icon.vue'
import { addWords } from '../api/api'
export default {
  name: 'SayToBaiyu',
  components: { Icon },
  data () {
    return {
      validateWbID: [
        { validate: val => !!val, message: '必须填写微博昵称' },
        { validate: val => val.length <= 15, message: '微博昵称过长' }
      ],
      validateWords: [
        { validate: val => !!val, message: '必须填写想说的话' },
        { validate: val => val.length <= 140, message: '不能超过140个字' }
      ],
      addressSlots: [
        {
          width: '100%',
          textAlign: 'right',
          values: Object.keys(AddressData)
        }, {
          width: '100%',
          textAlign: 'left',
          values: ['北京']
        }
      ],
      formData: {
        wbID: '',
        words: '',
        addressProvince: '北京',
        addressCity: '北京'
      },
      address: ['北京', '北京'],
      addressPickerShow: false
    }
  },
  methods: {
    toggleAddressPicker () {
      this.addressPickerShow = !this.addressPickerShow
    },
    addressChange (value, index) {
      let addressProvince, addressCity
      switch (index) {
        case 0:
          addressProvince = value
          const arr = AddressData[value]
          this.addressSlots[1].values = arr
          addressCity = arr[0]
          break
        case 1:
          addressCity = value
          break
      }
      this.address = [addressProvince, addressCity]
    },
    confirmSelect () {
      this.formData.addressProvince = this.address[0]
      this.formData.addressCity = this.address[1]
      this.addressPickerShow = false
    },
    cancelSelect () {
      this.address = [this.formData.addressProvince, this.formData.addressCity]
      this.addressPickerShow = false
    },
    submit () {
      this.$refs.form.validate()
        .then(result => {
          if (result) {
            addWords(this.formData)
              .then(data => {
                this.$toast.success(data.message)
              })
          }
        })
    }
  }
}
</script>

<style scoped lang='scss'>
.form-wrap {
  margin-top: 15px;
}
.padding8 {
  padding: 0 8px;
}
.back-icon {
  width: 40px;
}
</style>
