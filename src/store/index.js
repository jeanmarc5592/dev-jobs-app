import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      general: {
        themeMode: "light",
      },
      jobs: {
        jobsList: [],
      },
    };
  },
  mutations: {
    changeThemeMode(state, payload) {
      state.general.themeMode = payload.newMode;
    },
  },
  getters: {
    currentThemeMode(state) {
      return state.general.themeMode;
    },
  },
});

export default store;
