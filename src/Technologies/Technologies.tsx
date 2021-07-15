import { FC } from 'react'
import { Header } from '../UI/Header'
import { TechItem } from './TechItem'
import { Technology } from './Technology'

import styles from './Technologies.module.scss'

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

export const Technologies: FC = () => {
  return (
    <>
      <Header title="Technologies" />
      <div className={styles.TechList}>
        {techList.map(tech => <TechItem key={tech.name} tech={tech} />)}
      </div>
    </>
  )
}

