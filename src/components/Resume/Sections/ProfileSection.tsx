import type { FC } from "react"
import { useResume } from "../ResumeContext.ts"
import { ParagraphSection } from "./ParagraphSection.tsx"

export const ProfileSection: FC = () => {
  const { profile } = useResume()
  return <ParagraphSection title={"Profile"} content={profile} />
}
