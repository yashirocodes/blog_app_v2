import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import PostView from "../views/PostView.vue";
import MyArticle from "../components/MyArticle.vue";
import Error404 from "../components/Error404.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/post",
    name: "post",
    component: PostView,
    children: [
      {
        path: ":1",
        name: "1",
        component: MyArticle,
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: Error404,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
