import { createContext, useContext } from "react"
import type { ResumeSchema } from "../../schema/ResumeSchema.ts"
import { resume } from "../../data/resume/Resume.ts"

export const ResumeContext = createContext<ResumeSchema | null>(resume)

export const useResume = () => {
  const resume = useContext(ResumeContext)
  if (!resume) throw new Error("useResume must be used within ResumeProvider")
  return resume
}
