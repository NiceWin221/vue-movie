import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieDetailView from "@/views/MovieDetailView.vue";
import ArchivedView from "@/views/ArchivedView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/archived",
      name: "archived",
      component: ArchivedView,
    },
    {
      path: "/movies/:id",
      name: "movie-detail",
      component: MovieDetailView,
    },
  ],
});

export default router;
