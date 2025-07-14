import type { FC, MouseEvent } from "react"
import type { Project } from "../../schema/ResumeSchema.ts"
import { Card, CardContent, CardCover, Typography } from "@mui/joy"
import { useNavigate } from "react-router"

interface ProjectCardProps {
  project: Project
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate()

  const onClick = (event: MouseEvent, project: Project) => {
    event.preventDefault()
    navigate(`/projects/${project.id}`)
  }

  return (
    <Card
      key={project.id}
      variant="soft"
      component={"a"}
      href={`/projects/${project.id}`}
      onClick={(event) => onClick(event, project)}
      sx={(theme) => ({
        minHeight: 280,
        width: 400,
        textDecoration: "none",
        boxShadow: `0px 0px 0px 0px #000;`,
        transition: "box-shadow 200ms",
        "&:hover": {
          boxShadow: theme.shadow.lg,
        },
        "&:active": {
          boxShadow: theme.shadow.md,
        },
      })}
    >
      <CardCover>
        <img src={project.image} alt={`screenshot of ${project.title}`} />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography level="title-lg" textColor="#fff">
          {project.title}
        </Typography>
        <Typography level="body-sm" textColor="#fff">
          {project.startDate} - {project.endDate}
        </Typography>
      </CardContent>
    </Card>
  )
}
