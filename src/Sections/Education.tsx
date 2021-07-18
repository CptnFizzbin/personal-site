import { FC } from 'react'
import { SectionProps } from './SectionProps'

import styles from './Education.module.scss'

export const Education: FC<SectionProps> = ({
  gridArea,
}) => {
  return (
    <div className={styles.Education} style={{ gridArea }}>Education</div>
  )
}
