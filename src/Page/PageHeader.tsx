import { FC } from 'react'
import classNames from 'classnames'

import profilePicture from './avatar.png'
import styles from './PageHeader.module.scss'

interface HeaderProps {
  expanded: boolean
}

export const PageHeader: FC<HeaderProps> = ({
  expanded,
}) => {
  return (
    <div
      className={classNames({
        [styles.PageHeader]: true,
        [styles.expanded]: expanded,
      })}
    >
      <div className={styles.profilePicture}>
        <img src={profilePicture} alt="Stephen A. Wilson's avatar" />
      </div>

      <div className={styles.name}>
        Stephen A. Wilson

        <div className={styles.subtitle}>
          Full-Stack Developer
        </div>
      </div>
    </div>
  )
}
