import { FC } from 'react'

import mainStyle from './AppMain.module.scss'
import { Header } from '../UI/Header'

export const AppMain: FC = () => {
  return (
    <div className={mainStyle.main}>
      <Header title="PAGE CONTENT" />
    </div>
  )
}
