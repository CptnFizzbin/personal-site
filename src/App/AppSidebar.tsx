import { FC } from 'react'

import { AppHeader } from './AppHeader'

import sidebarStyles from './AppSidebar.module.scss'

export { sidebarStyles }

export const AppSidebar: FC = () => {
  return (
    <div className={sidebarStyles.sidebar}>
      <AppHeader expanded={false} />
    </div>
  )
}
