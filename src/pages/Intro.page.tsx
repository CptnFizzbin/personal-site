import type { FC } from "react"
import { Box, Stack, Typography } from "@mui/joy"
import { CptnFizzbinAvatar, StephenAvatar } from "../components/Avatar.tsx"
import { NavBar } from "../components/NavBar.tsx"

export const IntroPage: FC = () => {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Stack
        sx={{
          gap: 4,
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "primary.200",
        }}
      >
        <Stack gap={1} alignItems={"center"}>
          <Stack direction={"row"} gap={3}>
            <StephenAvatar />
            <CptnFizzbinAvatar />
          </Stack>

          <Box component={"h1"} sx={{ marginBottom: 0 }}>
            Heyo, I'm{" "}
            <Box sx={{ display: "inline", color: "primary.400" }}>
              Stephen A. Wilson
            </Box>
          </Box>

          <Typography level={"title-lg"}>Full Stack Developer</Typography>
        </Stack>

        <NavBar itemGap={2} />
      </Stack>
    </Stack>
  )
}
