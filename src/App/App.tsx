import { FC } from 'react'

import { AppSidebar } from './AppSidebar'
import { AppMain } from './AppMain'
import { AppFooter } from './AppFooter'

import appStyles from './App.module.scss'

const App: FC = () => {
  return (
    <div className={appStyles.App}>
      <aside>
        <AppSidebar />
      </aside>
      <main>
        <AppMain />
        <AppFooter />
      </main>
    </div>
  )
}

export default App
