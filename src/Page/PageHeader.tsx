import useWindowScroll from '@react-hook/window-scroll'
import classNames from 'classnames'
import { FC, useMemo } from 'react'

import { NamePlate } from './NamePlate'
import { ProfilePicture } from './ProfilePicture'

import styles from './PageHeader.module.scss'

export const PageHeader: FC = () => {
  const scrolled = useWindowScroll() > 200

  return useMemo(() => {
    console.log(scrolled)
    return (
      <div
        className={classNames(
          styles.PageHeader,
          { [styles.scrolled]: scrolled },
        )}
      >
        <ProfilePicture width={100} />
        <NamePlate />
      </div>
    )
  }, [scrolled])
}
