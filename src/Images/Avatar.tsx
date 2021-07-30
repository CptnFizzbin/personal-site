import { FC } from 'react'

import AvatarImg from './avatar.png'
import { ImgProps } from './ImgProps'

export const Avatar: FC<ImgProps> = ({
  className,
}) => (
  <img className={className} src={AvatarImg} alt="Stephen A. Wilson's avatar" />
)
