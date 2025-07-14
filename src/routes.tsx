import { createBrowserRouter } from "react-router"
import { IntroPage } from "./pages/Intro.page.tsx"
import { ResumePage } from "./pages/Resume.page.tsx"
import { DefaultLayout } from "./layouts/DefaultLayout.tsx"
import { ProjectsIndexPage } from "./pages/projects/Index.page.tsx"
import { ViewProjectPage } from "./pages/projects/View.page.tsx"

export const routes = createBrowserRouter([
  { path: "/", element: <IntroPage /> },
  {
    element: <DefaultLayout />,
    children: [
      { path: "projects", element: <ProjectsIndexPage /> },
      { path: "projects/:projectId", element: <ViewProjectPage /> },
      { path: "resume", element: <ResumePage /> },
    ],
  },
])
