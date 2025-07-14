import type { FC } from "react"
import { Box, Divider, Stack, Typography } from "@mui/joy"
import { Sidebar } from "../components/Sidebar.tsx"
import { ProfileSection } from "../components/Resume/Sections/ProfileSection.tsx"
import { ExperienceSection } from "../components/Resume/Sections/ExperienceSection.tsx"
import { LifeSection } from "../components/Resume/Sections/LifeSection.tsx"

export const ResumePage: FC = () => {
  return (
    <Stack flexGrow={1}>
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

      <Stack
        direction={"row"}
        flexGrow={1}
        maxWidth={1000}
        margin={"auto"}
        justifyContent={"center"}
      >
        <Box
          sx={{
            padding: 2,
            maxWidth: 300,
          }}
        >
          <Sidebar />
        </Box>

        <Divider orientation={"vertical"} />

        <Box sx={{ padding: 2 }}>
          <Stack gap={2} divider={<Divider />}>
            <ProfileSection />
            <ExperienceSection />
            <LifeSection />
          </Stack>
        </Box>
      </Stack>
    </Stack>
  )
}
