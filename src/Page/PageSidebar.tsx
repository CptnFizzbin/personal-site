import { FC } from 'react'

import { PageHeader } from './PageHeader'

import sidebarStyles from './PageSidebar.module.scss'

export { sidebarStyles }

export const PageSidebar: FC = () => {
  return (
    <div className={sidebarStyles.sidebar}>
      <PageHeader expanded={false} />
    </div>
  )
}
