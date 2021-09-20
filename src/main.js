import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {currency} from './currency.js';
import { ModalPlugin } from 'bootstrap-vue'
import { BSidebar } from 'bootstrap-vue'
import VueSmoothScroll from 'vue2-smooth-scroll'
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert)
Vue.use(VueSmoothScroll)

Vue.component('b-sidebar', BSidebar)

Vue.config.productionTip = false

Vue.filter('currency', currency)

Vue.use(ModalPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
