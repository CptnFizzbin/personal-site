import { FC } from 'react'

import { Header } from '../UI/Header'
import { Section } from './Section'

import styles from './Interests.module.scss'

const interests: string[] = [
  'Web Design',
  'Web Security',
  'UX Design',
  'Video Games',
  'Board Games',
  'DnD',
]

export const Interests: FC = () => {
  return (
    <Section className={styles.Interests}>
      <Header title="Interests" />
      <div className={styles.List}>
        {interests.map(
          interest => <ListItem key={interest} interest={interest} />)}
      </div>
    </Section>
  )
}

interface ListItemProps {
  interest: string
}

export const ListItem: FC<ListItemProps> = ({
  interest,
}) => {
  return (
    <div className={styles.ListItem}>{interest}</div>
  )
}
