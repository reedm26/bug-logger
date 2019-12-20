import Vue from "vue";
import Vuex from "vuex";
// @ts-ignore
import axios from "axios";

let _sandBox = axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 3000
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bugs: []
  },
  mutations: {
    setAllBugs(state, data) {
      state.bugs = data;
    }
  },
  actions: {
    async getBugs({ commit, dispatch }) {
      let res = await _sandBox.get("bugs");
      commit("setAllBugs", res.data);
    }
  },
  modules: {}
});
