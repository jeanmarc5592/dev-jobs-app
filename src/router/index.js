import { createRouter, createWebHistory } from "vue-router";
import JobsView from "../views/JobsView.vue";
import JobDetailsView from "../views/JobDetailsView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/jobs",
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:jobId",
      name: "job-details",
      component: JobDetailsView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
