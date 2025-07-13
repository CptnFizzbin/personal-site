import { CssVarsProvider } from "@mui/joy/styles"
import { CssBaseline, extendTheme } from "@mui/joy"

import { HomePage } from "./pages/HomePage.tsx"
import { ResumeProvider } from "./components/Resume/ResumeProvider.tsx"
import { resume } from "./components/Resume/Resume.ts"

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
        <HomePage />
      </ResumeProvider>
    </CssVarsProvider>
  )
}

export default App
