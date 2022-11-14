import gqlRequest from "../../graphql/request";
import { GET_JOBS, GET_JOB_BY_ID } from "../../graphql/queries";

const jobsModule = {
  state() {
    return {
      filters: {
        search: "",
        location: "",
        fullTimeOnly: false,
      },
      currentJobDetails: null,
      list: {
        currentPage: 0,
        items_per_page: 6,
        hasNextPage: false,
        firstLoading: true,
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
    increaseCurrentPage(state) {
      state.list.currentPage++;
    },
    resetCurrentPage(state) {
      state.list.currentPage = 0;
    },
    resetFirstLoading(state) {
      state.list.firstLoading = false;
    },
    addCurrentJobDetails(state, payload) {
      state.currentJobDetails = payload;
    },
    resetCurrentJobDetails(state) {
      state.currentJobDetails = null;
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
    hasNextPage(state) {
      return state.list.hasNextPage;
    },
    firstLoading(state) {
      return state.list.firstLoading;
    },
    currentJobDetails(state) {
      return state.currentJobDetails;
    },
  },
  actions: {
    async loadJobsFromAPI({ commit, state }, payload) {
      const shouldOverwrite = payload?.shouldOverwrite || false;
      const filters = state.filters;
      const filterRequestVariables = {
        company: "",
        position: "",
        location: "",
        contract: "",
      };
      if (filters.search) {
        filterRequestVariables.company = filters.search;
        filterRequestVariables.position = filters.search;
      }
      if (filters.location) {
        filterRequestVariables.location = filters.location;
      }
      if (filters.fullTimeOnly) {
        filterRequestVariables.contract = "Full Time";
      }
      try {
        const response = await gqlRequest({
          query: GET_JOBS,
          variables: {
            first: state.list.items_per_page,
            skip: state.list.currentPage * state.list.items_per_page,
            ...filterRequestVariables,
          },
        });
        const jobs = response?.jobs || [];
        const hasNextPage =
          response.jobsConnection?.pageInfo?.hasNextPage || false;
        commit("resetError");
        commit("addHasNextPage", hasNextPage);
        shouldOverwrite
          ? commit("overwriteJobs", jobs)
          : commit("addJobs", jobs);
        commit("increaseCurrentPage");
        commit("resetFirstLoading");
      } catch (error) {
        commit("resetFirstLoading");
        throw new Error(error);
      }
    },
    addGenericLoadingError({ commit }) {
      const errorMsg = {
        hasError: true,
        title: "Oops... Something went wrong",
        description: "We couldn't find any data. Please try again!",
      };
      commit("addError", errorMsg);
    },
    async loadJobDetailsFromAPI({ commit }, payload) {
      try {
        const response = await gqlRequest({
          query: GET_JOB_BY_ID,
          variables: {
            jobId: payload.jobId,
          },
        });
        const job = response?.job || {};
        commit("addCurrentJobDetails", job);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

export default jobsModule;
