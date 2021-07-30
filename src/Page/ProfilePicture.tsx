import { FC } from 'react'

import { Avatar } from '../Images/Avatar'

import styles from './ProfilePicture.module.scss'

interface ProfilePictureProps {
  width?: number
}

export const ProfilePicture: FC<ProfilePictureProps> = ({
  width = 100,
}) => {
  return <div
    className={styles.ProfilePicture}
    style={{ width }}
  >
    <Avatar />
  </div>
}
