import type { FC, ReactNode } from "react"
import { Stack, Typography } from "@mui/joy"

interface ParagraphSectionProps {
  title: string | ReactNode
  content: string[]
}

export const ParagraphSection: FC<ParagraphSectionProps> = ({
  title,
  content,
}) => {
  return (
    <Stack gap={1}>
      {typeof title === "string" ? (
        <Typography level={"h2"}>{title}</Typography>
      ) : (
        title
      )}
      {content.map((paragraph, index) => (
        <Typography key={index}>{paragraph}</Typography>
      ))}
    </Stack>
  )
}
