import { FC } from 'react'
import { ProfilePicture } from '../../Page/ProfilePicture'

import styles from './Overview.module.scss'
import { NamePlate } from '../../Page/NamePlate'

export const Overview: FC = () => {
  return (
    <div className={styles.Overview}>
      <div>
        <ProfilePicture width={300} bg={false}/>
        <NamePlate />
      </div>
    </div>
  )
}
