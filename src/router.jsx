import { createBrowserRouter, Outlet } from "react-router-dom";

import { routes } from "./routes";
import NotFound from "./views/NotFound/NotFound";
import ScrollRestoration from "@/components/ScrollRestoration/ScrollRestoration";

import App from "./App";
import ArticleLayout from "./layouts/ArticleLayout";
// import IndexLayout from "./layouts/IndexLayout"; //pendiente borrar
import ProjectsCategoryOverview from "./views/Projects/ProjectsCategoryOverview";
import ProjectsCategoriesIndex from "./views/Projects/ProjectsCategoriesIndex";
import ArticleProjectsLayout from "./layouts/ArticleProjectsLayout";
import ProjectDetail from "./views/Projects/ProjectDetail";

const RootLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          index: true,
          element: <App />,
        },
        {
          element: <ArticleLayout />,
          children: [
            {
              path: "/projects",
              element: <ArticleProjectsLayout />,
              children: [
                {
                  path: routes["Projects"],
                  element: <ProjectsCategoriesIndex />,
                },
                {
                  path: routes["Web Platforms & Applications"],
                  element: <ProjectsCategoryOverview categoryIndex="0" />,
                },
                {
                  path: routes["Interface Design"],
                  element: <ProjectsCategoryOverview categoryIndex="1" />,
                },
                {
                  path: routes["Community Contributions"],
                  element: <ProjectsCategoryOverview categoryIndex="2" />,
                },
                {
                  path: "/projects/:idCategory/:idProject",
                  element: <ProjectDetail />,
                },
              ],
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename: "/" } // Cambia el basename si es necesario.
);

export default router;
