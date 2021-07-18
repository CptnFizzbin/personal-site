import { FC } from 'react'

import { Technologies } from '../Sections/Technologies'
import { Interests } from '../Sections/Interests'
import { Experience } from '../Sections/Experience'
import { Projects } from '../Sections/Projects'
import { Education } from '../Sections/Education'

import styles from './PageMain.module.scss'

export const PageMain: FC = () => {
  return (
    <div className={styles.PageMain}>
      <Technologies gridArea={'technologies'} />
      <Interests gridArea={'interests'} />
      <Experience gridArea={'experience'} />
      <Projects gridArea={'projects'} />
      <Education gridArea={'education'} />
    </div>
  )
}
