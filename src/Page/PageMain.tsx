import { FC } from 'react'

import { Experience } from '../Sections/Experience'
import { Interests } from '../Sections/Interests'
import { Projects } from '../Sections/Projects'
import { Technologies } from '../Sections/Technologies'

import styles from './PageMain.module.scss'

export const PageMain: FC = () => {
  return (
    <div className={styles.PageMain}>
      <Projects />
      <div className={styles.col2}>
        <Technologies />
      </div>
      <div className={styles.col1}>
        <Interests />
      </div>
      <Experience />
    </div>
  )
}
