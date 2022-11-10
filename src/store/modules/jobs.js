import gqlRequest from "../../graphql/request";
import { GET_JOBS } from "../../graphql/queries";

const jobsModule = {
  state() {
    return {
      filters: {
        search: "",
        location: "",
        fullTimeOnly: false,
      },
      list: {
        currentPage: 0,
        items_per_page: 6,
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
    increaseCurrentPage(state) {
      state.list.currentPage++;
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
  actions: {
    async loadJobsFromAPI({ commit, state }) {
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
        commit("addJobs", jobs);
        commit("resetError");
        commit("addHasNextPage", hasNextPage);
        commit("increaseCurrentPage");
      } catch (error) {
        return error;
      }
    },
  },
};

export default jobsModule;
