import { createStore } from "vuex";
import generalModule from "./modules/general";
import jobsModule from "./modules/jobs";

const store = createStore({
  modules: {
    general: generalModule,
    jobs: jobsModule,
  },
});

export default store;
