import type { FC } from "react"
import { Header } from "../components/UI/Header.tsx"
import { Stack } from "@mui/joy"
import { Outlet } from "react-router"

export const DefaultLayout: FC = () => {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Header />
      <Outlet />
    </Stack>
  )
}
