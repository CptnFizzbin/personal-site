import type { FC } from "react"
import { useParams } from "react-router"
import { useResume } from "../../components/Resume/ResumeContext.ts"
import { Box, Button, Sheet, Stack, Typography } from "@mui/joy"
import { LinkButton } from "../../components/UI/LinkButton.tsx"
import { Markdown } from "../../components/Markdown.tsx"

export const ViewProjectPage: FC = () => {
  const { projectId } = useParams()
  const { projects } = useResume()

  if (!projectId) throw new Error("projectId param missing")

  const project = projects.find((project) => project.id === projectId)
  if (!project) throw new Error("project not found")

  return (
    <Stack gap={1}>
      <Box>
        <LinkButton to={"/projects"} variant={"plain"}>
          Back to projects
        </LinkButton>
      </Box>

      <Stack direction={"row"} padding={2} paddingTop={0} gap={2}>
        <Stack gap={1}>
          <Sheet sx={{ padding: 1, borderRadius: 8 }} variant={"outlined"}>
            <img
              src={project.image}
              alt={`screenshot of ${project.title}`}
              style={{ width: "300px" }}
            />
          </Sheet>
          <Typography>
            {project.startDate} - {project.endDate}
          </Typography>
          <Typography>{project.tools.join(", ")}</Typography>
          {project.links.map((link) => (
            <Button component={"a"} href={link.url} target={"_blank"}>
              {link.title}
            </Button>
          ))}
        </Stack>

        <Stack>
          <Markdown>{project.writeup.join("\n\n")}</Markdown>
        </Stack>
      </Stack>
    </Stack>
  )
}
