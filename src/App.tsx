import { CssVarsProvider } from "@mui/joy/styles"
import { CssBaseline, extendTheme } from "@mui/joy"
import { ResumeProvider } from "./components/Resume/ResumeProvider.tsx"
import { resume } from "./Resume.ts"
import { RouterProvider } from "react-router"
import { routes } from "./routes.tsx"

const theme = extendTheme({
  fontFamily: {
    display: "'Comfortaa', system-ui",
    body: "'Comfortaa', system-ui",
  },
})

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />

      <ResumeProvider resume={resume}>
        <RouterProvider router={routes} />
      </ResumeProvider>
    </CssVarsProvider>
  )
}

export default App
