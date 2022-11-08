const jobsModule = {
  state() {
    return {
      filters: {
        search: "",
        location: "",
        fullTimeOnly: false,
      },
      list: [],
    };
  },
  mutations: {
    updateFilters(state, payload) {
      state.filters = {
        ...state.filters,
        ...payload,
      };
    },
    addJobs(state, payload) {
      state.list = [...state.list, ...payload];
    },
  },
  getters: {
    jobFilters(state) {
      return state.filters;
    },
  },
};

export default jobsModule;
