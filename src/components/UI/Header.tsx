import type { FC } from "react"
import { Stack, Typography } from "@mui/joy"
import { StephenAvatar } from "../Avatar.tsx"
import { Link } from "./Link.tsx"
import { NavBar } from "../NavBar.tsx"

export const Header: FC = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        padding: 1,
        "@media print": {
          ".no-print, .no-print *": {
            display: "none !important",
          },
        },
      }}
    >
      <Stack direction={"row"} gap={1} component={Link} to={"/"}>
        <StephenAvatar size={48} />
        <Typography level={"title-lg"}>Stephen A. Wilson</Typography>
      </Stack>

      <NavBar />
    </Stack>
  )
}
