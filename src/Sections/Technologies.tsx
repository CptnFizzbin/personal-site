import classNames from 'classnames'
import { FC } from 'react'

import { Header } from '../UI/Header'
import { SegmentBar, SegmentBarHover } from '../UI/SegmentBar'
import { Section } from './Section'

import styles from './Technologies.module.scss'

export interface Technology {
  name: string
  years: number
}

const techList: Technology[] = [
  { name: 'JavaScript', years: 8 },
  { name: 'TypeScript', years: 3 },
  { name: 'React', years: 4 },
  { name: 'CSS', years: 8 },
  { name: 'SCSS', years: 8 },
  { name: 'Bootstrap', years: 8 },
  { name: 'Ruby', years: 8 },
  { name: 'Node', years: 6 },
  { name: 'Python', years: 3 },
  { name: 'Java', years: 1 },
  { name: 'Git', years: 8 },
]

export const Technologies: FC = () => {
  return (
    <Section className={styles.Technologies}>
      <Header title="Technologies" />
      <div className={styles.List}>
        {techList.map(tech => <ListItem key={tech.name} tech={tech} />)}
      </div>
    </Section>
  )
}

interface ListItemProps {
  tech: Technology
}

export const ListItem: FC<ListItemProps> = ({
  tech,
}) => {
  return (
    <div className={classNames(styles.ListItem, SegmentBarHover)}>
      <div className={styles.ListItemName}>{tech.name}</div>
      <SegmentBar
        value={tech.years}
        segments={10}
        label={`${tech.years} ${tech.years > 1 ? 'years' : 'year'}`}
      />
    </div>
  )
}
