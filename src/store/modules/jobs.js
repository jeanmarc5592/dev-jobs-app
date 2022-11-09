const jobsModule = {
  state() {
    return {
      filters: {
        search: "",
        location: "",
        fullTimeOnly: false,
      },
      list: {
        totalLength: 0,
        data: [],
        error: {
          hasError: false,
          title: "",
          description: "",
        },
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
    addTotalJobsLength(state, payload) {
      // All stored jobs in backend (useful conditional rendering of "load more" button)
      state.list.totalLength = payload;
    },
    addError(state, payload) {
      state.list.error = payload;
    },
    resetError(state) {
      state.list.error = {
        hasError: false,
        title: "",
        description: "",
      };
    },
  },
  getters: {
    jobFilters(state) {
      return state.filters;
    },
    jobsList(state) {
      return state.list.data;
    },
    jobsListLength(state) {
      return state.list.data.length;
    },
    totalJobsLength(state) {
      return state.list.totalLength;
    },
    error(state) {
      return state.list.error;
    },
  },
};

export default jobsModule;
