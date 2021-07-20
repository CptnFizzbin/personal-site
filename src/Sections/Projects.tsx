import { FC } from 'react'
import { SectionProps } from './SectionProps'

import styles from './Projects.module.scss'
import { Header } from '../UI/Header'

export const Projects: FC<SectionProps> = ({
  gridArea,
}) => {
  return (
    <div className={styles.Projects} style={{ gridArea }}>
      <Header title="Projects" />
    </div>
  )
}
