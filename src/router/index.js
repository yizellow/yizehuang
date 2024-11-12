import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProjectView from "@/views/ProjectView.vue";
import AboutMeView from "@/views/AboutMe.vue";
import ContactView from "@/views/Contact.vue";
import ThreeDModelView from "@/views/Projects/ThreeDModelView.vue";
import ChipsView from "@/views/Projects/ChipsView.vue";
import YizellowView from "@/views/Projects/YizellowView.vue";

// import LoadingPage from "@/views/LoadingPage.vue";

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
      path: "/Project/ThreeDModel",
      name: "ThreeDModel",
      component: ThreeDModelView,
    },
    {
      path: "/Project/Yizellow",
      name: "Yizellow",
      component: YizellowView,
    },
  ],
});
export default router;
