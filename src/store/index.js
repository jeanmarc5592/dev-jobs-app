import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      general: {
        themeMode: "light",
      },
      jobs: {
        filters: {
          search: "",
          location: "",
          fullTimeOnly: false,
        },
        list: [],
      },
    };
  },
  mutations: {
    changeThemeMode(state, payload) {
      state.general.themeMode = payload.newMode;
    },
    updateFilters(state, payload) {
      state.jobs.filters = {
        ...state.jobs.filters,
        ...payload,
      };
    },
  },
  getters: {
    currentThemeMode(state) {
      return state.general.themeMode;
    },
    jobFilters(state) {
      return state.jobs.filters;
    },
  },
});

export default store;
