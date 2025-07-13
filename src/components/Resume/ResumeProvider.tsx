import type { FC, PropsWithChildren } from "react"
import type { ResumeSchema } from "./ResumeSchema.ts"
import { ResumeContext } from "./ResumeContext.ts"

interface ResumeProviderProps extends PropsWithChildren {
  resume: ResumeSchema
}

export const ResumeProvider: FC<ResumeProviderProps> = ({
  resume,
  children,
}) => {
  return (
    <ResumeContext.Provider value={resume}>{children}</ResumeContext.Provider>
  )
}
