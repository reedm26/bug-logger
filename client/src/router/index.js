import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  }
];
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route

const router = new VueRouter({
  routes
});

export default router;
