import { FC } from 'react'
import styles from './PageHeader.module.scss'
import { ProfilePicture } from './ProfilePicture'
import { NamePlate } from './NamePlate'

export const PageHeader: FC = () => {
  return (
    <div className={styles.PageHeader}>
      <ProfilePicture width={100} />
      <NamePlate />
    </div>
  )
}
