import type { FC } from "react"
import { useResume } from "../ResumeContext.ts"
import { ParagraphSection } from "./ParagraphSection.tsx"

export const LifeSection: FC = () => {
  const { life } = useResume()
  return <ParagraphSection title={"Life"} content={life} />
}
