import { FC } from 'react'

import { Overview } from '../Sections/Overview'
import { PageFooter } from './PageFooter'
import { PageHeader } from './PageHeader'
import { PageMain } from './PageMain'

import styles from './Page.module.scss'

const Page: FC = () => {
  return (
    <div className={styles.Page}>
      <PageHeader />

      <header>
        <Overview />
      </header>

      <main>
        <PageMain />
      </main>

      <footer>
        <PageFooter />
      </footer>
    </div>
  )
}

export default Page
