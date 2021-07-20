import { FC } from 'react'

import { Header } from '../UI/Header'
import { Section } from './Section'

import styles from './Education.module.scss'

export const Education: FC = () => {
  return (
    <Section className={styles.Education}>
      <Header title="Education" />
    </Section>
  )
}
