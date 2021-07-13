import { FC } from 'react'

import { Header } from './Header/Header'

import styles from './App.module.scss'

const App: FC = () => {
  const scrolledToTop = true

  return (
    <div className={styles.App}>
      <Header expanded={scrolledToTop} />
    </div>
  )
}

export default App
