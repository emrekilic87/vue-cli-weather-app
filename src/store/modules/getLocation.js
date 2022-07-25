import axios from "axios";
import { endpoints } from "../../constants";

const state = {
  location: null,
  currentLocation: null,
};

const actions = {
  fetchLocation({ commit }, city) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${endpoints.geo}/direct?q=${city}&limit=1&appid=${endpoints.apikey}`
        )
        .then(
          (response) => {
            commit("setLocation", response.data[0]);
            resolve(response.data[0]);
          },
          (error) => {
            console.log(error);
            reject(error);
          }
        );
    });
  },

  fetchCurrentLocation({ commit }, { lat, lon }) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${endpoints.geo}/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${endpoints.apikey}`
        )
        .then(
          (response) => {
            commit("setCurrentLocation", response.data[0]);
            resolve(response.data[0]);
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
  getLocation: (state) => state.location,
  getCurrentLocation: (state) => state.currentLocation,
};

const mutations = {
  setLocation: (state, location) => {
    state.location = location;
  },
  setCurrentLocation: (state, currentLocation) => {
    state.currentLocation = currentLocation;
  },
};

export default { state, actions, getters, mutations };
