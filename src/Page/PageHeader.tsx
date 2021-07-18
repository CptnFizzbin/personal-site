import { FC } from 'react'
import classNames from 'classnames'

import profilePicture from './avatar.png'
import appHeaderStyles from './PageHeader.module.scss'

export { appHeaderStyles }

interface HeaderProps {
  expanded: boolean
}

export const PageHeader: FC<HeaderProps> = ({
  expanded,
}) => {
  return (
    <div
      className={classNames({
        [appHeaderStyles.header]: true,
        [appHeaderStyles.expanded]: expanded,
      })}
    >
      <div className={appHeaderStyles.profilePicture}>
        <img src={profilePicture} alt="Stephen A. Wilson's avatar" />
      </div>

      <div className={appHeaderStyles.name}>
        Stephen A. Wilson

        <div className={appHeaderStyles.subtitle}>
          Full-Stack Developer
        </div>
      </div>
    </div>
  )
}
