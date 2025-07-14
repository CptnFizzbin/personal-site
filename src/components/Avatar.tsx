import type { FC } from "react"
import { Box } from "@mui/joy"
import stephenAvatar from "../assets/avatar-stephen-2025.png"
import cptnFizzbinAvatar from "../assets/avatar-cptn-fizzbin.png"

interface AvatarProps {
  src: string
  alt: string
  size?: number
}

export const Avatar: FC<AvatarProps> = ({ src, alt, size = 128 }) => {
  return (
    <Box
      sx={{
        img: {
          borderRadius: "100%",
          width: size,
        },
      }}
    >
      <img src={src} alt={alt} />
    </Box>
  )
}

export const StephenAvatar: FC<Partial<AvatarProps>> = (props) => (
  <Avatar src={stephenAvatar} alt={"avatar of Stephen Wilson"} {...props} />
)
export const CptnFizzbinAvatar: FC<Partial<AvatarProps>> = (props) => (
  <Avatar
    src={cptnFizzbinAvatar}
    alt={"avatar of Captain Fizzbin"}
    {...props}
  />
)
