import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App.tsx"

import "@fontsource/inter"
import "@fontsource/comfortaa"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
