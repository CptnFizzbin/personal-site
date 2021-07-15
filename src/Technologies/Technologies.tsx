import { FC } from 'react'
import { Header } from '../UI/Header'
import { TechItem } from './TechItem'
import { Technology } from './Technology'

const techList: Technology[] = [
  { name: 'JavaScript', strength: 8 },
  { name: 'TypeScript', strength: 8 },
  { name: 'React', strength: 7 },
  { name: 'CSS', strength: 6 },
  { name: 'SCSS', strength: 6 },
  { name: 'Bootstrap', strength: 9 },
  { name: 'Ruby', strength: 9 },
  { name: 'Node', strength: 8 },
  { name: 'Python', strength: 6 },
  { name: 'Java', strength: 5 },
]

export const Technologies: FC = () => {
  return (
    <>
      <Header title="Technologies" />
      {techList.map(tech => <TechItem key={tech.name} tech={tech} />)}
    </>
  )
}

