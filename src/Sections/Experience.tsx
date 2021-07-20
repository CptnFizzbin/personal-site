import { FC } from 'react'

import { Header } from '../UI/Header'
import { Section } from './Section'

import styles from './Experience.module.scss'

export const Experience: FC = () => {
  return (
    <Section className={styles.Experience}>
      <Header title="Experience" />
    </Section>
  )
}
