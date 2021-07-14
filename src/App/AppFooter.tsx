import { FC } from 'react'

import footerStyles from './AppFooter.module.scss'

export const AppFooter: FC = () => {
  return (
    <footer className={footerStyles.footer}>
      Footer!
    </footer>
  )
}
