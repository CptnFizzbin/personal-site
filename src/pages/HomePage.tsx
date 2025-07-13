import type { FC } from "react"
import { Box, Divider, Stack, Typography } from "@mui/joy"
import { Sidebar } from "../components/Sidebar.tsx"
import { ProfileSection } from "../components/Sections/ProfileSection.tsx"
import { ExperienceSection } from "../components/Sections/ExperienceSection.tsx"
import { LifeSection } from "../components/Sections/LifeSection.tsx"

export const HomePage: FC = () => {
  return (
    <Stack>
      <Stack
        sx={{
          backgroundColor: "primary.400",
          padding: 2,
          justifyContent: "center",
          justifyItems: "center",
          alignContent: "center",
        }}
      >
        <Typography sx={{ textAlign: "center" }} level="h1">
          Stephen A. Wilson
        </Typography>
        <Typography sx={{ textAlign: "center" }} level="title-md">
          Full Stack Developer
        </Typography>
      </Stack>

      <Stack direction={"row"}>
        <Box
          sx={{
            backgroundColor: "primary.200",
            padding: 2,
            maxWidth: 325,
          }}
        >
          <Sidebar />
        </Box>

        <Box sx={{ padding: 2, flexGrow: 1 }}>
          <Stack gap={2} divider={<Divider />} maxWidth={1000}>
            <ProfileSection />
            <ExperienceSection />
            <LifeSection />
          </Stack>
        </Box>
      </Stack>
    </Stack>
  )
}
