import { FC } from 'react'

import { Technologies } from '../Sections/Technologies'

import styles from './PageMain.module.scss'

export const PageMain: FC = () => {
  return (
    <div className={styles.PageMain}>
      <Technologies />
    </div>
  )
}
