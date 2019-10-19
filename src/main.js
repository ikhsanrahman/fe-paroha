import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css' //
import vuetify from './plugins/vuetify'
// import vWow from 'v-wow'
import 'animate.css/animate.min.css'
import vWow from 'v-wow'
Vue.use(vWow);

import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Vue.use(vWow)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
