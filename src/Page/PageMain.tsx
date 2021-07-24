import { FC } from 'react'

import { Overview } from '../Sections/Overview'
import { Technologies } from '../Sections/Technologies'
import { Interests } from '../Sections/Interests'
import { Experience } from '../Sections/Experience'
import { Projects } from '../Sections/Projects'
import { Education } from '../Sections/Education'

import styles from './PageMain.module.scss'

export const PageMain: FC = () => {
  return (
    <div className={styles.PageMain}>
      <Overview />
      <Technologies />
      <Interests />
      <Experience />
      <Projects />
      <Education />
    </div>
  )
}
