import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueAxios, axios),
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDp3Ud3SixagW8bJOwtosy5bBMB5JRNS_k",
  },
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
