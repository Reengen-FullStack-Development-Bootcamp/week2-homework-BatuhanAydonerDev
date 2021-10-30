import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Vuelidate from "vuelidate";
import Format from "./mixins/Format.js";
import "./assets/css/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

// Bootstrap-vue
Vue.use(BootstrapVue);
// Bootstrap-vue icons
Vue.use(IconsPlugin);

// Vuelidate for validation
Vue.use(Vuelidate);

// Vue router
Vue.use(router);

// Format mixin
Vue.mixin(Format);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
