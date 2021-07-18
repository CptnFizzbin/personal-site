import { FC } from 'react'

import { Technologies } from '../Technologies/Technologies'

import mainStyle from './PageMain.module.scss'

export const PageMain: FC = () => {
  return (
    <div className={mainStyle.main}>
      <Technologies />
    </div>
  )
}
