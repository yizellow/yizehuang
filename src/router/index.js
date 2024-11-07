import { createRouter, createWebHistory } from "vue-router";
import ThreeDModelView from "@/views/ThreeDModelView.vue";
import HomeView from "@/views/HomeView.vue";
import ChipsView from "@/views/ChipsView.vue";
import ProjectView from "@/views/ProjectView.vue";
import AboutMeView from "@/views/AboutMe.vue";
import ContactView from "@/views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/AboutMe",
      name: "AboutMe",
      component: AboutMeView,
    },
    {
      path: "/Contact",
      name: "Contact",
      component: ContactView,
    },
    {
      path: "/Project",
      name: "Project",
      component: ProjectView,
    },
    {
      path: "/Project/Chips",
      name: "Chips",
      component: ChipsView,
    },
    {
      path: "/Project/ThreeDModelView",
      name: "ThreeDModelView",
      component: ThreeDModelView,
    },
  ],
});
export default router;
