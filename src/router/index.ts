import { createRouter, createWebHistory } from "vue-router";
import PlayGround from "../pages/playground/PlayGround.vue";
import ConsoleLayout from "@/layouts/ConsoleLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: ConsoleLayout,
      props: { showLinks: true },
      children: [
        {
          path: "/",
          name: "playground",
          component: PlayGround,
        },
      ],
    },
  ],
});

export default router;
