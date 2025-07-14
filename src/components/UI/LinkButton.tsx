import type { FC, HTMLAttributeAnchorTarget, MouseEventHandler } from "react"
import { Button, type ButtonProps } from "@mui/joy"
import { useNavigate } from "react-router"

interface LinkButtonProps extends ButtonProps {
  to: string
  target?: HTMLAttributeAnchorTarget
}

export const LinkButton: FC<LinkButtonProps> = ({
  to,
  children,
  ...buttonProps
}) => {
  const navigate = useNavigate()

  const onClick: MouseEventHandler = (event) => {
    event.preventDefault()
    navigate(to)
  }

  return (
    <Button component={"a"} href={to} onClick={onClick} {...buttonProps}>
      {children}
    </Button>
  )
}
