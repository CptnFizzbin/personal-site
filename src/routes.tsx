import { createBrowserRouter } from "react-router"
import { IntroPage } from "./pages/IntroPage.tsx"
import { ResumePage } from "./pages/ResumePage.tsx"
import { DefaultLayout } from "./layouts/DefaultLayout.tsx"

export const routes = createBrowserRouter([
  { path: "/", element: <IntroPage /> },
  {
    element: <DefaultLayout />,
    children: [{ path: "/resume", element: <ResumePage /> }],
  },
])
