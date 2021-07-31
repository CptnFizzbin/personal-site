import { ComponentType, FC } from 'react'

import * as Logos from '../Images/Logos'
import { Header } from '../UI/Header'
import { Section } from './Section'

import styles from './Experience.module.scss'

interface Job {
  company: string
  title: string
  timeframe: string
  tech: string[]
  tasks: string[]
  icons: ComponentType[]
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
    icons: [
      Logos.RailsLogo,
      Logos.TypeScriptLogo,
      Logos.ReactLogo,
      Logos.JavaLogo,
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
    icons: [
      Logos.NodeLogo,
      Logos.SailsLogo,
      Logos.AngularLogo,
      Logos.MongoDbLogo,
    ],
    tech: [
      'Node + Sails',
      'AngularJS',
      'MongoDB',
    ],
    tasks: [
      'Developing the backend systems using Node and Sails.js to run the front end angular applications. ',
      'System administrator for their staging and production servers.',
    ],
  },
]

export const Experience: FC = () => {
  return (
    <Section className={styles.Experience}>
      <Header title="Experience" />
      <div className={styles.Placements}>
        {jobs.map(job => (
          <div key={job.company} className={styles.Placement}>
            <div className={styles.PlacementHeader}>
              <div className={styles.Company}>{job.company}</div>
              <div className={styles.Duration}>{job.timeframe}</div>
            </div>
            <div className={styles.Title}>{job.title}</div>
            <div className={styles.Icons}>
              {job.icons.map(Icon => <Icon key={Icon.displayName} />)}
            </div>
            <div className={styles.Technologies}>
              {job.tech.map(
                tech => <div key={tech} className={styles.Item}>{tech}</div>)}
            </div>
            <div className={styles.Tasks}>
              {job.tasks.map(
                task => <div key={task} className={styles.Item}>{task}</div>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
