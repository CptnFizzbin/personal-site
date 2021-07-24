import { FC } from 'react'

import { NamePlate } from './NamePlate'
import { ProfilePicture } from './ProfilePicture'

import styles from './PageHeader.module.scss'

export const PageHeader: FC = () => {
  return (
    <div className={styles.PageHeader}>
      <ProfilePicture width={100} />
      <NamePlate />
    </div>
  )
}
