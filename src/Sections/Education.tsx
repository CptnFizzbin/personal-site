import { FC } from 'react'
import { SectionProps } from './SectionProps'

import styles from './Education.module.scss'
import { Header } from '../UI/Header'

export const Education: FC<SectionProps> = ({
  gridArea,
}) => {
  return (
    <div className={styles.Education} style={{ gridArea }}>
      <Header title="Education" />
    </div>
  )
}
