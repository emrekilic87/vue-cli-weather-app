import axios from "axios";
import { endpoints } from "../../constants";

const state = {
  currentInfos: null,
};

const actions = {
  fetchCurrentInfos({ commit }, { lat, lon }) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${endpoints.allData}?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${endpoints.apikey}`
        )
        .then(
          (response) => {
            commit("setCurrentInfos", response.data);
            resolve(response.data);
          },
          (error) => {
            console.log(error);
            reject(error);
          }
        );
    });
  },
};

const getters = {
  getCurrentInfos: (state) => state.currentInfos,
};

const mutations = {
  setCurrentInfos: (state, currentInfos) => {
    state.currentInfos = currentInfos;
  },
};

export default { state, actions, getters, mutations };
