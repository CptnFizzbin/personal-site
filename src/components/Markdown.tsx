import type { FC } from "react"
import JuiMarkdown from "jui-markdown"

interface ReactMarkdownProps {
  children: string
}

export const Markdown: FC<ReactMarkdownProps> = ({ children }) => {
  return <JuiMarkdown>{children}</JuiMarkdown>
}
