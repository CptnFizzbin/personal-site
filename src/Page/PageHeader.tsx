import { FC } from 'react'

import profilePicture from './avatar.png'
import styles from './PageHeader.module.scss'

export const PageHeader: FC = () => {
  return (
    <div className={styles.PageHeader}>
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
