import { FC } from 'react'
import classNames from 'classnames'

import styles from './Section.module.scss'

interface SectionProps {
  className: string
}

export const Section: FC<SectionProps> = ({
  className,
  children,
}) => {
  return (
    <section className={classNames(className, styles.Section)}>{children}</section>
  )
}
