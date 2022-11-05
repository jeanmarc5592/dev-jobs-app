import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      jobs: [],
    };
  },
});

export default store;
