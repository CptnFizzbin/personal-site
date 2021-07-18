import { FC } from 'react'

import { Header } from '../UI/Header'
import { SectionProps } from './SectionProps'

import styles from './Interests.module.scss'

const interests: string[] = [
  'Web Design',
  'Web Security',
  'UX Design',
  'Video Games',
  'Board Games',
  'DnD',
]

export const Interests: FC<SectionProps> = ({
  gridArea,
}) => {
  return (
    <div className={styles.Interests} style={{ gridArea }}>
      <Header title="Interests" />
      <div className={styles.List}>
        {interests.map(
          interest => <ListItem key={interest} interest={interest} />)}
      </div>
    </div>
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
