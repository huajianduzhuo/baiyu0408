import Vue from 'vue'
import 'muse-ui/lib/styles/base.less'
import { SlidePicker, Form, TextField, Grid, AppBar, Button, BottomSheet, Icon, Snackbar, Card } from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'
import 'typeface-roboto'
import Toast from 'muse-ui-toast'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(SlidePicker)
Vue.use(Form)
Vue.use(TextField)
Vue.use(Grid)
Vue.use(AppBar)
Vue.use(Button)
Vue.use(BottomSheet)
Vue.use(Icon)
Vue.use(Snackbar)
Vue.use(Card)
Vue.use(Toast, {
  position: 'top-end',
  close: false,
  successIcon: '',
  infoIcon: '',
  warningIcon: '',
  errorIcon: ''
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
