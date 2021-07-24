import classNames from 'classnames'
import { FC } from 'react'

import profilePicture from './avatar.png'

import styles from './ProfilePicture.module.scss'

interface ProfilePictureProps {
  width?: number
  bg?: boolean
}

export const ProfilePicture: FC<ProfilePictureProps> = ({
  width = 100,
  bg = true,
}) => {
  return <div className={classNames(styles.ProfilePicture, {[styles.bg]: bg})} style={{ width }}>
    <img src={profilePicture} alt="Stephen A. Wilson's avatar" />
  </div>
}
