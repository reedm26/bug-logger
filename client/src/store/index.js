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
    bugNotes: []
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
      state.bugNotes = data;
    },
    makeNotes(state, note) {
      state.bugNotes.push(note);
    }
  },
  actions: {
    async getBugs({ commit, dispatch }) {
      let res = await _sandBox.get("bugs");
      commit("setAllBugs", res.data);
    },
    async getBugById({ commit, dispatch }, id) {
      let res = await _sandBox.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },
    async createBug({ commit, dispatch }, bug) {
      let res = await _sandBox.post("bugs", bug);
      commit("addBug", res.data);
      commit("setActiveBug", res.data);
      console.log(res.data);
    },
    async getNotesByBugId({ commit, dispatch }, id) {
      let res = await _sandBox.get("bugs/" + id + "/notes");
      commit("displayNotes", res.data);
    },
    async makeNotes({ commit, dispatch }, note) {
      let res = await _sandBox.post("notes", note);
      commit("makeNotes", res.data);
    },
    async closeBug({ commit, dispatch }, id) {
      let res = await _sandBox.delete("bugs/" + id);
      dispatch("getBugById", id);
    }
  },
  modules: {}
});
