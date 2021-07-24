import { FC } from 'react'

import { NamePlate } from '../../Page/NamePlate'
import { ProfilePicture } from '../../Page/ProfilePicture'

import styles from './Overview.module.scss'

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
