import type { FC, MouseEventHandler } from "react"
import { Link as MuiLink, type LinkProps as MuiLinkProps } from "@mui/joy"
import { useNavigate } from "react-router"

interface LinkProps extends MuiLinkProps {
  to: string
}

export const Link: FC<LinkProps> = ({ to, children, ...props }) => {
  const navigate = useNavigate()

  const onClick: MouseEventHandler = (event) => {
    event.preventDefault()
    navigate(to)
  }

  return (
    <MuiLink {...props} href={to} onClick={onClick}>
      {children}
    </MuiLink>
  )
}
