import type { RouteConfigsTable } from "/#/index";
const Layout = () => import("/@/layout/index.vue");

const homeRouter: RouteConfigsTable = {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/dashboard",
  meta: {
    icon: "home-filled",
    title: "首页",
    rank: 0
  },
  children: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("/@/views/dashboard/index.vue"),
      meta: {
        title: "首页"
      }
    }
  ]
};

export default homeRouter;
