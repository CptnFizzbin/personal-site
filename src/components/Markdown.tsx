import type { FC } from "react"
import JuiMarkdown, { getOverrides } from "jui-markdown"
import { Link } from "@mui/joy"

interface ReactMarkdownProps {
  children: string
}

export const Markdown: FC<ReactMarkdownProps> = ({ children }) => {
  return (
    <JuiMarkdown
      overrides={{
        ...getOverrides({}),
        a: {
          component: Link,
          props: {
            target: "_blank",
          },
        },
      }}
    >
      {children}
    </JuiMarkdown>
  )
}
