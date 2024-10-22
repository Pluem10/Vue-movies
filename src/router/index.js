import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import MyList from "@/views/MyList.vue";
import TvShow from "@/views/Tv-Show.vue";
import Content from "@/views/Content.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/News",
    name: "News",
    component: News,
  },
  {
    path: "/tvshow",
    name: "Tv-Show",
    component: TvShow,
  },
  {
    path: "/mylist",
    name: "Mylist",
    component: MyList,
  },
  {
    path: "/content",
    name: "Content",
    component: Content,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
