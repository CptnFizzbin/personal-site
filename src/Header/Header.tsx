import { FC } from 'react'
import classNames from 'classnames'

import profilePicture from './avatar.png'
import styles from './Header.module.scss'

interface HeaderProps {
  expanded: boolean;
}

export const Header: FC<HeaderProps> = ({
  expanded,
}) => {
  return (
    <div className={classNames(styles.header, { [styles.expanded]: expanded })}>
      <div className={styles.profilePicture}>
        <img src={profilePicture} alt="Stephen A. Wilson's avatar" />
      </div>

      <div className={styles.name}>
        Stephen A. Wilson
      </div>

      <div className={styles.subtitle}>
        Full-Stack Developer
      </div>
    </div>
  )
}
