import { FC } from 'react'

import footerStyles from './PageFooter.module.scss'

export const PageFooter: FC = () => {
  return (
    <footer className={footerStyles.footer}>
      Footer!
    </footer>
  )
}
