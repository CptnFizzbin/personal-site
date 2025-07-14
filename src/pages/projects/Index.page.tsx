import type { FC } from "react"
import { useResume } from "../../components/Resume/ResumeContext.ts"
import { Stack, Typography } from "@mui/joy"
import { ViewProject } from "../../components/Projects/ViewProject.tsx"

export const ProjectsIndexPage: FC = () => {
  const { projects } = useResume()

  return (
    <Stack padding={2} gap={2}>
      <Typography level={"h1"}>My Projects</Typography>

      {projects.map((project) => (
        <ViewProject project={project} />
      ))}
    </Stack>
  )
}
