import { FC } from 'react'

import { PageSidebar } from './PageSidebar'
import { PageMain } from './PageMain'
import { PageFooter } from './PageFooter'

import appStyles from './Page.module.scss'

const Page: FC = () => {
  return (
    <div className={appStyles.App}>
      <aside>
        <PageSidebar />
      </aside>
      <main>
        <PageMain />
        <PageFooter />
      </main>
    </div>
  )
}

export default Page
