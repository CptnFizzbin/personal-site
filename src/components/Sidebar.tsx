import type { FC, PropsWithChildren } from "react"
import { Divider, Link, Stack, Typography } from "@mui/joy"
import { useResume } from "./Resume/ResumeContext.ts"

const SideBarHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      sx={{
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      {children}
    </Typography>
  )
}

export const Sidebar: FC = () => {
  const { contact, skills, tools, education, interests } = useResume()

  return (
    <Stack gap={1} divider={<Divider />}>
      <Stack>
        <SideBarHeader>Contact</SideBarHeader>
        <Typography>
          <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
        </Typography>
        <Typography>
          Github:{" "}
          <Link href={`https://github.com/${contact.gitHub}`} target={"_blank"}>
            {contact.gitHub}
          </Link>
        </Typography>
        <Typography>
          LinkedIn:{" "}
          <Link
            href={`https://linkedin.com/in/${contact.linkedIn}`}
            target={"_blank"}
          >
            {contact.linkedIn}
          </Link>
        </Typography>
      </Stack>

      <Stack>
        <SideBarHeader>Skills</SideBarHeader>
        {skills.map((skill) => (
          <Stack
            key={skill.name}
            direction="row"
            justifyContent={"space-between"}
          >
            <Typography>{skill.name}</Typography>
            <Typography>{skill.years} years</Typography>
          </Stack>
        ))}
      </Stack>

      <Stack>
        <SideBarHeader>Tools</SideBarHeader>
        <Stack
          direction="row"
          flexWrap={"wrap"}
          columnGap={1}
          justifyContent={"space-between"}
        >
          {tools.map((tool) => (
            <Typography key={tool}>{tool}</Typography>
          ))}
        </Stack>
      </Stack>

      <Stack>
        <SideBarHeader>Education</SideBarHeader>
        {education.map((item) => (
          <Stack key={item.title}>
            <Typography fontWeight={"bold"}>{item.title}</Typography>
            <Typography>{item.organization}</Typography>
            <Typography>
              {item.startDate} - {item.endDate}
            </Typography>
            {item.awards.map((award) => (
              <Typography key={award} level={"body-sm"}>
                {award}
              </Typography>
            ))}
          </Stack>
        ))}
      </Stack>

      <Stack>
        <SideBarHeader>Interests</SideBarHeader>
        <Stack
          direction="row"
          flexWrap={"wrap"}
          columnGap={1}
          justifyContent={"space-between"}
        >
          {interests.map((item) => (
            <Typography key={item}>{item}</Typography>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}
