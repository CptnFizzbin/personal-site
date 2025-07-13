import type { FC } from "react"
import { useResume } from "../Resume/ResumeContext.ts"
import { ParagraphSection } from "./ParagraphSection.tsx"

export const ProfileSection: FC = () => {
  const { profile } = useResume()
  return <ParagraphSection title={"Profile"} content={profile} />
}
