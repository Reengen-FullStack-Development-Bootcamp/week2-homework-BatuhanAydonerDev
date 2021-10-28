import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hotel from "../views/Hotel.vue";
import Hotels from "../views/Hotels.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hotels/:city",
    name: "Hotels",
    component: Hotels,
  },
  {
    path: "/hotels/:city/hotel/:id",
    name: "Hotel",
    component: Hotel,
    props: true,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
