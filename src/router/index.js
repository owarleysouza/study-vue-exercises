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
  {
    path: "/exercise-04",
    name: "Exercise04",
    component: () => import("../views/Exercise04.vue"),
  },
  {
    path: "/exercise-05",
    name: "Exercise05",
    component: () => import("../views/Exercise05.vue"),
  },
  {
    path: "/exercise-06",
    name: "Exercise06",
    component: () => import("../views/Exercise06.vue"),
  },
  {
    path: "/exercise-07",
    name: "Exercise07",
    component: () => import("../views/Exercise07.vue"),
  },
  {
    path: "/exercise-08",
    name: "Exercise08",
    component: () => import("../views/Exercise08.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
