import { FC } from 'react'

import styles from './Header.module.scss'

interface HeaderProps {
  title: string
}

export const Header: FC<HeaderProps> = ({ title }) =>
  <div className={styles.Header}>{title}</div>

