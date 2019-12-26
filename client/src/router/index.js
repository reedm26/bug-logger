import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Notes from "../views/Notes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/blogs/:id",
    name: "blog",
    component: Notes
  }
];
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route

const router = new VueRouter({
  routes
});

export default router;
