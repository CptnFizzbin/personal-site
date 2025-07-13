import { type FC } from "react"
import { Divider, Stack, Typography } from "@mui/joy"
import { useResume } from "../Resume/ResumeContext.ts"
import { ParagraphSection } from "./ParagraphSection.tsx"

export const ExperienceSection: FC = () => {
  const { experience } = useResume()

  return (
    <Stack gap={2}>
      <Typography level={"h2"}>Experience</Typography>
      {experience.map((item) => (
        <ParagraphSection
          key={item.title}
          title={
            <Stack>
              <Typography level={"h3"}>{item.title}</Typography>
              <Stack
                direction={"row"}
                gap={1}
                divider={<Divider orientation={"vertical"} />}
                marginBottom={1}
              >
                <Typography>{item.organization}</Typography>
                <Typography>{item.location}</Typography>
                <Typography>
                  {item.startDate} - {item.endDate}
                </Typography>
              </Stack>
            </Stack>
          }
          content={item.description}
        />
      ))}
    </Stack>
  )
}
