import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/Index/index.vue";
import Login from "../pages/Login/index.vue";
import Detail from "../pages/Detail/index.vue";
import Edit from "../pages/Edit/index.vue";
import Create from "../pages/Create/index.vue";
import Register from "../pages/Register/index.vue";
import User from "../pages/User/index.vue";
import My from "../pages/My/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/my",
    name: "My",
    component: My,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
