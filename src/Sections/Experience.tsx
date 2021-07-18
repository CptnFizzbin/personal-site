import { FC } from 'react'

import { Header } from '../UI/Header'
import { SectionProps } from './SectionProps'

import styles from './Experience.module.scss'

export const Experience: FC<SectionProps> = ({
  gridArea,
}) => {
  return (
    <div className={styles.Experience} style={{ gridArea }}>
      <Header title="Experience" />
    </div>
  )
}
