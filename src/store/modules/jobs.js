const jobsModule = {
  state() {
    return {
      filters: {
        search: "",
        location: "",
        fullTimeOnly: false,
      },
      list: null,
    };
  },
  mutations: {
    updateFilters(state, payload) {
      state.filters = {
        ...state.filters,
        ...payload,
      };
    },
  },
  getters: {
    jobFilters(state) {
      return state.filters;
    },
  },
};

export default jobsModule;
