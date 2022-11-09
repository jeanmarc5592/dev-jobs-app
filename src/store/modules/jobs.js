const jobsModule = {
  state() {
    return {
      filters: {
        search: "",
        location: "",
        fullTimeOnly: false,
      },
      list: {
        data: [],
        loading: false,
        error: "",
      },
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
      state.list.data = [...state.list.data, ...payload];
    },
    toggleLoading(state, payload) {
      state.list.loading = payload;
    },
    toggleError(state, payload) {
      state.list.error = payload;
    },
  },
  getters: {
    jobFilters(state) {
      return state.filters;
    },
    jobsList(state) {
      return state.list.data;
    },
  },
};

export default jobsModule;
