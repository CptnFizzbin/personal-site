import { FC } from 'react'

import uiStyles from './UiStyles.module.scss'

export { uiStyles }

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) =>
  <div className={uiStyles.header}>{title}</div>

