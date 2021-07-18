import { FC } from 'react'

import { Technologies } from '../Sections/Technologies'
import { Interests } from '../Sections/Interests'

import styles from './PageMain.module.scss'

export const PageMain: FC = () => {
  return (
    <div className={styles.PageMain}>
      <Technologies gridArea={'technologies'}/>
      <Interests gridArea={'interests'}/>
    </div>
  )
}
