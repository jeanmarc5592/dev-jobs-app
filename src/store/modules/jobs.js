const jobsModule = {
  state() {
    return {
      filters: {
        search: "",
        location: "",
        fullTimeOnly: false,
      },
      list: {
        hasNextPage: false,
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
      // Used at first loading of "/jobs" and when "load more" button is clicked
      state.list.data = [...state.list.data, ...payload];
    },
    overwriteJobs(state, payload) {
      // Used when filters are applied to add a new list of jobs
      state.list.data = payload;
    },
    toggleLoading(state, payload) {
      state.list.loading = payload;
    },
    toggleError(state, payload) {
      state.list.error = payload;
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
    addHasNextPage(state, payload) {
      state.list.hasNextPage = payload;
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
    error(state) {
      return state.list.error;
    },
    filtersAreActive(state) {
      const { search, location, fullTimeOnly } = state.filters;
      return search || location || fullTimeOnly;
    },
    hasNextPage(state) {
      return state.list.hasNextPage;
    },
  },
};

export default jobsModule;
