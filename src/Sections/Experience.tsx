import { FC } from 'react'

import { Header } from '../UI/Header'
import { Section } from './Section'

import styles from './Experience.module.scss'

interface Job {
  company: string
  title: string
  timeframe: string
  tech: string[]
  tasks: string[]
}

const jobs: Job[] = [
  {
    company: 'OpenText',
    title: 'Full-Stack Developer',
    timeframe: '2015 - Present',
    tech: [
      'Ruby + Rails',
      'Java + Spring',
      'Python + Flask',
      'Postgres',
      'SQL Server',
      'React',
    ],
    tasks: [
      'Worked with product managers to develop and maintain internal applications for process management.',
      'Lead Developer on a Java/Spring project and a Python/Flask project.',
      'Reverse engineered databases for migrations to an internal test case management system.',
      'Maintained and upgraded legacy Rails application.',
      'Investigated new technologies for use in the team.',
    ],
  },
  {
    company: 'Akrotech',
    title: 'Jr. Full-Stack Developer',
    timeframe: '2015',
    tech: [
      'Ruby + Rails',
      'Java + Spring',
      'Python + Flask',
      'Postgres',
      'SQL Server',
      'React',
    ],
    tasks: [
      'Worked with product managers to develop and maintain internal applications for process management.',
      'Lead Developer on a Java/Spring project and a Python/Flask project.',
      'Reverse engineered databases for migrations to an internal test case management system.',
      'Maintained and upgraded legacy Rails application.',
      'Investigated new technologies for use in the team.',
    ],
  },
]

export const Experience: FC = () => {
  return (
    <Section className={styles.Experience}>
      <Header title="Experience" />
      {jobs.map(job => (
        <div key={job.company}>
          <div>{job.company} | {job.timeframe}</div>
          <div><em>{job.title}</em></div>
          <div>{job.tech}</div>
          <div>{job.tasks}</div>
        </div>
      ))}
    </Section>
  )
}
