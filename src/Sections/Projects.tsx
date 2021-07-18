import { FC } from 'react'
import { SectionProps } from './SectionProps'

import styles from './Projects.module.scss'

export const Projects: FC<SectionProps> = ({
  gridArea,
}) => {
  return (
    <div className={styles.Projects} style={{ gridArea }}>Projects</div>
  )
}
