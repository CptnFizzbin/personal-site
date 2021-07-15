import { FC } from 'react'

import { Technologies } from '../Technologies/Technologies'

import mainStyle from './AppMain.module.scss'

export const AppMain: FC = () => {
  return (
    <div className={mainStyle.main}>
      <Technologies />
    </div>
  )
}
