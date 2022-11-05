import { createRouter, createWebHistory } from "vue-router";
import JobsView from "../views/JobsView.vue";
import JobDetailsView from "../views/JobDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/jobs",
    },
    {
      path: "/jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:jobId",
      component: JobDetailsView,
    },
  ],
});

export default router;
