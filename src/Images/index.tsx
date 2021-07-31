import { FC } from 'react'

import AvatarImg from './avatar.png'
import DiscordBotsImg from './DiscordBots.png'
import { ImgProps } from './ImgProps'
import ScoreboardIoImg from './ScoreboardIo.png'

export * from './Logos'

export const Avatar: FC<ImgProps> = ({
  className,
}) => (
  <img className={className} src={AvatarImg} alt="Stephen A. Wilson's avatar" />
)

export const ScoreboardIoScreenshot: FC<ImgProps> = ({
  height,
  className,
}) => (
  <img
    className={className}
    src={ScoreboardIoImg}
    alt={'Scoreboard-io game in progress. Spock leading with 49 points, Kirk with 32, and Bones with 23'}
    style={{ height }}
  />
)

export const DiscordBotsScreenshot: FC<ImgProps> = ({
  height,
  className,
}) => (
  <img
    className={className}
    src={DiscordBotsImg}
    alt={'Three discord bot profile pictures named Testing Bot, Jasmine, and Status'}
    style={{ height }}
  />
)
