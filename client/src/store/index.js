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
    bugs: [],
    activeBug: {},
    notes: []
  },
  mutations: {
    setAllBugs(state, data) {
      state.bugs = data;
    },
    setActiveBug(state, bug) {
      state.activeBug = bug;
    },
    addBug(state, bug) {
      state.bugs.push(bug);
    },
    displayNotes(state, data) {
      state.notes = data;
    }
  },
  actions: {
    async getBugs({ commit, dispatch }) {
      let res = await _sandBox.get("bugs");
      commit("setAllBugs", res.data);
    },
    async getBugById({ commit, dispatch }, id) {
      let res = await _sandBox.get("bugs/" + id);
      commit("setAvctiveBug", res.data);
    },
    async createBug({ commit, dispatch }, bug) {
      let res = await _sandBox.post("bugs", bug);
      commit("addBug");
    },
    async getNotes({ commit, dispatch }, id) {
      let res = await _sandBox.post("bugs/" + id + "notes");
      commit("displayNotes", res.data);
    }
  },
  modules: {}
});
