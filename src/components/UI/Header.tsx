import type { FC } from "react"
import { Stack, Typography } from "@mui/joy"
import { StephenAvatar } from "../Avatar.tsx"
import { Link } from "./Link.tsx"
import { LinkButton } from "./LinkButton.tsx"

export const Header: FC = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        padding: 1,
      }}
    >
      <Stack direction={"row"} gap={1} component={Link} to={"/"}>
        <StephenAvatar size={48} />
        <Typography level={"title-lg"}>Stephen A. Wilson</Typography>
      </Stack>

      <Stack direction={"row"} gap={1}>
        <LinkButton variant={"plain"} to={"/"} disabled title={"coming soon"}>
          About
        </LinkButton>
        <LinkButton variant={"plain"} to={"/"} disabled title={"coming soon"}>
          Projects
        </LinkButton>
        <LinkButton variant={"solid"} to={"/resume"}>
          Resume
        </LinkButton>
      </Stack>
    </Stack>
  )
}
