// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock";

const permissionRouter = {
  path: "/permission",
  meta: {
    title: "权限管理",
    icon: "lollipop",
    rank: 7
  },
  children: [
    {
      path: "/permission/page/index",
      name: "PermissionPage",
      meta: {
        title: "页面权限"
      }
    },
    {
      path: "/permission/button/index",
      name: "PermissionButton",
      meta: {
        title: "按钮权限",
        authority: []
      }
    }
  ]
};

const pipelineRouter = {
  path: "/pipeline",
  meta: {
    icon: "set-up",
    title: "流水线",
    rank: 10
  },
  children: [
    {
      path: "/pipeline/projects",
      name: "Projects",
      component: "/pipeline/index",
      meta: {
        title: "项目列表"
      }
    },
    {
      path: "/pipeline/create",
      name: "CreateProject",
      component: "/pipeline/create",
      meta: {
        title: "创建项目"
      }
    }
  ]
};

// 添加不同按钮权限到/permission/button页面中
function setDifAuthority(authority, routes) {
  routes.children[1].meta.authority = [authority];
  return routes;
}

export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: ({ query }) => {
      if (query.name === "admin") {
        return {
          code: 0,
          info: [pipelineRouter, setDifAuthority("v-admin", permissionRouter)]
        };
      } else {
        return {
          code: 0,
          info: [setDifAuthority("v-test", permissionRouter)]
        };
      }
    }
  }
] as MockMethod[];
