import { FC } from 'react'

import { Header } from '../UI/Header'
import { StrengthBar } from '../UI/StrengthBar'
import { SectionProps } from './SectionProps'

import styles from './Technologies.module.scss'

export interface Technology {
  name: string
  strength: number
}

const techList: Technology[] = [
  { name: 'JavaScript', strength: 80 },
  { name: 'TypeScript', strength: 80 },
  { name: 'React', strength: 70 },
  { name: 'CSS', strength: 60 },
  { name: 'SCSS', strength: 60 },
  { name: 'Bootstrap', strength: 80 },
  { name: 'Ruby', strength: 80 },
  { name: 'Node', strength: 80 },
  { name: 'Python', strength: 60 },
  { name: 'Java', strength: 50 },
  { name: 'Git', strength: 80 },
]

export const Technologies: FC<SectionProps> = ({
  gridArea,
}) => {
  return (
    <div className={styles.Technologies} style={{ gridArea }}>
      <Header title="Technologies" />
      <div className={styles.List}>
        {techList.map(tech => <ListItem key={tech.name} tech={tech} />)}
      </div>
    </div>
  )
}

interface ListItemProps {
  tech: Technology
}

export const ListItem: FC<ListItemProps> = ({
  tech,
}) => {
  return (
    <div className={styles.ListItem}>
      <div className={styles.ListItemName}>{tech.name}</div>
      <StrengthBar strength={tech.strength} />
    </div>
  )
}
