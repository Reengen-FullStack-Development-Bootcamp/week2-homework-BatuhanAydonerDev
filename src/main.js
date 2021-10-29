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

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(Vuelidate);

Vue.use(router);

Vue.mixin(Format);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
