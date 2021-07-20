import { FC } from 'react'

import { PageFooter } from './PageFooter'
import { PageHeader } from './PageHeader'
import { PageMain } from './PageMain'
import { PageSidebar } from './PageSidebar'

import styles from './Page.module.scss'

const Page: FC = () => {
  return (
    <div className={styles.Page}>
      <header className={styles.areaHeader}>
        <PageHeader/>
      </header>
      <aside className={styles.areaSidebar}>
        <PageSidebar />
      </aside>
      <main className={styles.areaMain}>
        <PageMain />
        <PageFooter />
      </main>
    </div>
  )
}

export default Page
