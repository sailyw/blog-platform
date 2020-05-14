import Vue from "vue";
import VueRouter from "vue-router";
// import Index from "../pages/Index/index.vue";
// import Login from "../pages/Login/index.vue";
// import Detail from "../pages/Detail/index.vue";
// import Edit from "../pages/Edit/index.vue";
// import Create from "../pages/Create/index.vue";
// import Register from "../pages/Register/index.vue";
// import User from "../pages/User/index.vue";
// import My from "../pages/My/index.vue";

import store from "../store";
window.store = store;

Vue.use(VueRouter);

// const router = new VueRouter({
//   routes: [
//     {
//       path: "/",
//       name: "Index",
//       component: Index,
//     },
//     {
//       path: "/login",
//       name: "Login",
//       component: Login,
//     },
//     {
//       path: "/register",
//       name: "Register",
//       component: Register,
//     },
//     {
//       path: "/detail/:blogId",
//       name: "Detail",
//       component: Detail,
//     },
//     {
//       path: "/edit/:blogId",
//       name: "Edit",
//       component: Edit,
//       meta: { requiresAuth: true },
//     },
//     {
//       path: "/create",
//       name: "Create",
//       component: Create,
//       meta: { requiresAuth: true },
//     },
//     {
//       path: "/user/:userId",
//       name: "User",
//       component: User,
//     },
//     {
//       path: "/my",
//       name: "My",
//       component: My,
//       meta: { requiresAuth: true },
//     },
//     // {
//     //   path: '/about',
//     //   name: 'About',
//     //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//     // }
//   ],
// });

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("../pages/Index/index.vue"),
    },
    {
      path: "/login",
      component: () => import("../pages/Login/index.vue"),
    },
    {
      path: "/detail/:blogId",
      component: () => import("../pages/Detail/index.vue"),
    },
    {
      path: "/edit/:blogId",
      component: () => import("../pages/Edit/index.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/create",
      component: () => import("../pages/Create/index.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/user/:userId",
      component: () => import("../pages/User/index.vue"),
    },
    {
      path: "/my",
      component: () => import("../pages/My/index.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/register",
      component: () => import("../pages/Register/index.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // 匹配某个路由
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log(store.getters.isLogin);
    store.dispatch("checkLogin").then((isLogin) => {
      if (!isLogin) {
        next({
          path: "/login",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    });
  } else {
    next(); // 确保一定要调用 next()
  }
});

export default router;
