import { FC } from 'react'

import { Header } from '../UI/Header'
import { Section } from './Section'

import styles from './Projects.module.scss'


export const Projects: FC = () => {
  return (
    <Section className={styles.Projects}>
      <Header title="Projects" />
    </Section>
  )
}
