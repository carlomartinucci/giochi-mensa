import React from "react"

import Home from "./pages/Home"
import HomeLayout from "./pages/HomeLayout"

import CascataLayout from "./pages/CascataLayout"
import CascataIndex from "./pages/CascataIndex"
import CascataShow from "./pages/CascataShow"
import CascataNew from "./pages/CascataNew"

const routes = [
  {
    path: "/",
    name: "HomeLayout",
    Component: HomeLayout,
    nestedRoutes: [{ path: "/", name: "Home", Component: Home }],
  },
  {
    path: "/cascata",
    name: "CascataLayout",
    Component: CascataLayout,
    nestedRoutes: [
      { path: "/", name: "CascataIndex", Component: CascataIndex },
      { path: ":cascataId", name: "CascataShow", Component: CascataShow },
      { path: "new", name: "CascataNew", Component: CascataNew },
    ],
  },
]

export const renderRoutes = routes =>
  routes.map(({ path, name, Component, nestedRoutes }) => (
    <Component
      path={path}
      key={name}
      children={nestedRoutes ? renderRoutes(nestedRoutes) : null}
    />
  ))

export default routes
