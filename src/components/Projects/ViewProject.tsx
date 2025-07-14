import type { FC } from "react"
import { Button, Sheet, Stack, Typography } from "@mui/joy"
import { Markdown } from "../Markdown.tsx"
import type { Project } from "../../schema/ResumeSchema.ts"

interface ViewProjectProps {
  project: Project
}

export const ViewProject: FC<ViewProjectProps> = ({ project }) => {
  return (
    <Stack gap={1}>
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
