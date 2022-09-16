import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/exercise-01",
    name: "Exercise01",
    component: () => import("../views/Exercise01.vue"),
  },
  {
    path: "/exercise-02",
    name: "Exercise02",
    component: () => import("../views/Exercise02.vue"),
  },
  {
    path: "/exercise-03",
    name: "Exercise03",
    component: () => import("../views/Exercise03.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
