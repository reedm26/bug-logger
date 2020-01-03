import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Notes from "../views/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/notes/:id",
    name: "notes",
    component: Notes
  }
];
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route

const router = new VueRouter({
  routes
});

export default router;
