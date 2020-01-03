import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Vmodal from "vue-js-modal" NOTE  npm install vue-js-modal --save

// Vue.config.productionTip = false;
// Vue.use.(VModal)
new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
