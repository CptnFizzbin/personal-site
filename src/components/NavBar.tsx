import type { FC } from "react"
import { LinkButton } from "./UI/LinkButton.tsx"
import { Button, Stack } from "@mui/joy"
import { useMatches } from "react-router"

export interface NavBarProps {
  itemGap?: number
}

export const NavBar: FC<NavBarProps> = ({ itemGap = 1 }) => {
  const routes = useMatches()
  console.log(routes)
  const isProjectsPage = routes.some((route) => route.pathname === "/projects")
  const isResumePage = routes.some((route) => route.pathname === "/resume")

  return (
    <Stack direction={"row"} gap={itemGap}>
      <LinkButton variant={isProjectsPage ? "solid" : "plain"} to={"/projects"}>
        Projects
      </LinkButton>
      <LinkButton variant={isResumePage ? "solid" : "plain"} to={"/resume"}>
        Resume
      </LinkButton>
      <Button
        component={"a"}
        variant={"plain"}
        href={"https://github.com/CptnFizzbin"}
        target={"_blank"}
      >
        GitHub
      </Button>
    </Stack>
  )
}
