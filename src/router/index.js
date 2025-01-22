import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import HomeView from "@/views/HomeView.vue";
import ProjectView from "@/views/ProjectView.vue";
import AboutMeView from "@/views/AboutMe.vue";
import ContactView from "@/views/Contact.vue";
import dddView from "@/views/Projects/dddView.vue";
import ChipsView from "@/views/Projects/ChipsView.vue";
import YizellowView from "@/views/Projects/YizellowView.vue";
import FilmCameraView from "@/views/Projects/FilmCameraView.vue";
import PageNotFoundView from "@/views/PageNotFound.vue";
import MemberPageView from "@/views/Member/MemberPage.vue";

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
      path: "/Project/ddd",
      name: "ddd",
      component: dddView,
    },
    {
      path: "/Project/Yizellow",
      name: "Yizellow",
      component: YizellowView,
    },
    {
      path: "/Project/FilmCamera",
      name: "FilmCamera",
      component: FilmCameraView,
    },
    {
      path: "/Member/MemberPage",
      name: "MemberPage",
      component: MemberPageView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: PageNotFoundView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      alert("You dont have access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
