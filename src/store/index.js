import { createStore } from "vuex";
import getLocation from "./modules/getLocation";
import getCurrentInfos from "./modules/getCurrentInfos";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    getLocation,
    getCurrentInfos,
  },
});
